import { UserRepository } from '../repositories/user-repository';
import { User } from '../entities/user';

export class CompanyService {
    public userRepository: UserRepository;
    constructor(url: string) {
        this.userRepository = new UserRepository(url);
    }
    public async getUsers(): Promise<User[]> {
        return await this.userRepository.fetchData();
    }
    public async fetchCompanyDetailsBasedOnTitle(title: string): Promise<User[]> {
        const users = await this.getUsers();
        const filteredUsers: User[] = [];

        for (const user of users) {
            if (user.company.title === title) {
                filteredUsers.push(user);
            }
        }

        return filteredUsers;
    }

}