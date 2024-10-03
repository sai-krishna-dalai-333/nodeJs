import { UserController } from "./controllers/user-controller";
import { BankController } from "./controllers/bank-controller";
import { CompanyController } from "./controllers/company-controller";

const userController = new UserController();
const bankController = new BankController();
const companyController = new CompanyController();
userController.getUsers();
userController.getUsersByAgeGenderBloodGroup(28, 'female', 'O-');
companyController.getUsersByCompanyTitle('Sales Manager');
bankController.getUsersByBankCardNumber('9289760655481815'); 
