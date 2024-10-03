import { BankService } from '../service/bank-service';
import { url } from '../constants/constants';

export class BankController {
    public bankService: BankService;

    constructor() {
        this.bankService = new BankService(url);
    }
    public async getUsersByBankCardNumber(cardNumber: string) {
        try {
            const users = await this.bankService.fetchBankDetailsBasedOnCardNumber(cardNumber);
            console.log(`Users with Bank Card Number: ${cardNumber}`);
            for (let i = 0; i < users.length; i++) { 
                console.log(`Name: ${users[i].firstName} ${users[i].lastName}, Bank Card Number: ${users[i].bank.cardNumber}`);
            }
        } catch (error) {
            console.error('Error fetching bank data:', error);
        }
    }
}