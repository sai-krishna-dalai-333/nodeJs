import * as https from 'https';
import { User } from '../entities/user';

export class UserRepository {
    private url: string;
    constructor(url: string) {
        this.url = url;
    }
    public fetchData(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            https.get(this.url, (response) => {
                let data = '';
                response.on('data', (chunk) => {
                    data += chunk;
                });
                response.on('end', () => {
                    try {
                        const jsonResponse = JSON.parse(data);
                        resolve(jsonResponse.users);
                    } catch (error) {
                        reject(new Error('Error parsing JSON'));
                    }
                    console.log(`Headers: ${JSON.stringify(response.headers)}`);
                    console.log(`Status Code: ${response.statusCode}`);
                });
            }).on('error', (error) => {
                reject(new Error(`Error fetching data: ${error.message}`));
            });
        });
    }
}
