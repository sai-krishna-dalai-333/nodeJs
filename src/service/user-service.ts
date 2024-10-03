import { UserRepository } from '../repositories/user-repository';
import { User } from '../entities/user';

export class UserService {
    public userRepository: UserRepository;
    constructor(url: string) {
        this.userRepository = new UserRepository(url);
    }
    public async getUsers(): Promise<User[]> {
        return await this.userRepository.fetchData();
    }

    public async fetchUserBasedOnAgeGenderAndBloodGroup(age: number, gender: string, bloodGroup: string): Promise<User[]> {
        const users = await this.getUsers();
        const filteredUsers: User[] = [];

        for (const user of users) {
            if (user.age === age && user.gender === gender && user.bloodGroup === bloodGroup) {
                filteredUsers.push(user);
            }
        }

        return filteredUsers;
    }

    

}
