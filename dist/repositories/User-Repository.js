"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const https = __importStar(require("https"));
class UserRepository {
    constructor(url) {
        this.url = url;
    }
    fetchData() {
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
                    }
                    catch (error) {
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
exports.UserRepository = UserRepository;
