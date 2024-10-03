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
exports.CompanyController = void 0;
const company_service_1 = require("../service/company-service");
const constants_1 = require("../constants/constants");
class CompanyController {
    constructor() {
        this.companyService = new company_service_1.CompanyService(constants_1.url);
    }
    getUsersByCompanyTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.companyService.fetchCompanyDetailsBasedOnTitle(title);
                console.log(`Users in Company with Title: ${title}`);
                users.map(user => {
                    console.log(`Name: ${user.firstName} ${user.lastName}, Company: ${user.company.name}`);
                });
            }
            catch (error) {
                console.error('Error fetching company data:', error);
            }
        });
    }
}
exports.CompanyController = CompanyController;
