import { UserRepository } from '../repositories/user-repository';
import { User } from '../entities/user';

export class BankService {
    public userRepository: UserRepository;
    constructor(url: string) {
        this.userRepository = new UserRepository(url);
    }
    public async getUsers(): Promise<User[]> {
        return await this.userRepository.fetchData();
    }
    public async fetchBankDetailsBasedOnCardNumber(cardNumber: string): Promise<User[]> {
        const users = await this.getUsers();
        return users.filter(user => user.bank.cardNumber === cardNumber);
    }
}