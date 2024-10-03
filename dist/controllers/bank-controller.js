"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankController = void 0;
const bank_service_1 = require("../service/bank-service");
const constants_1 = require("../constants/constants");
class BankController {
    constructor() {
        this.bankService = new bank_service_1.BankService(constants_1.url);
    }
    getUsersByBankCardNumber(cardNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.bankService.fetchBankDetailsBasedOnCardNumber(cardNumber);
                console.log(`Users with Bank Card Number: ${cardNumber}`);
                for (let i = 0; i < users.length; i++) {
                    console.log(`Name: ${users[i].firstName} ${users[i].lastName}, Bank Card Number: ${users[i].bank.cardNumber}`);
                }
            }
            catch (error) {
                console.error('Error fetching bank data:', error);
            }
        });
    }
}
exports.BankController = BankController;
