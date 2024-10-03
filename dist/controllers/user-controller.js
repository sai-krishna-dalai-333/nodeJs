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
exports.UserController = void 0;
const user_service_1 = require("../service/user-service");
const constants_1 = require("../constants/constants");
class UserController {
    constructor() {
        this.userService = new user_service_1.UserService(constants_1.url);
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.getUsers();
                for (let i = 0; i < users.length; i++) {
                    console.log(users[i].email);
                }
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        });
    }
    getUsersByAgeGenderBloodGroup(age, gender, bloodGroup) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.fetchUserBasedOnAgeGenderAndBloodGroup(age, gender, bloodGroup);
                console.log(`Filtered Users (Age: ${age}, Gender: ${gender}, Blood Group: ${bloodGroup}):`);
                for (const user of users) {
                    console.log(`Name: ${user.firstName} ${user.lastName}, Email: ${user.email}`);
                }
            }
            catch (error) {
                console.error('Error fetching filtered data:', error);
            }
        });
    }
}
exports.UserController = UserController;
