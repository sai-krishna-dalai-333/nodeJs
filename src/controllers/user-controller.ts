import { UserService } from '../service/user-service';
import { url } from '../constants/constants';

export class UserController {
    public userService: UserService;

    constructor() {
        this.userService = new UserService(url);
    }

    public async getUsers() {
        try {
            const users = await this.userService.getUsers();
            for (let i = 0; i < users.length; i++) {
                console.log(users[i].email);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    public async getUsersByAgeGenderBloodGroup(age: number, gender: string, bloodGroup: string) {
        try {
            const users = await this.userService.fetchUserBasedOnAgeGenderAndBloodGroup(age, gender, bloodGroup);
            console.log(`Filtered Users (Age: ${age}, Gender: ${gender}, Blood Group: ${bloodGroup}):`);
            for (const user of users) { 
                console.log(`Name: ${user.firstName} ${user.lastName}, Email: ${user.email}`);
            }
        } catch (error) {
            console.error('Error fetching filtered data:', error);
        }
    }

}
