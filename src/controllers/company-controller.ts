import { CompanyService } from '../service/company-service';
import { url } from '../constants/constants';

export class CompanyController {
    public companyService: CompanyService;

    constructor() {
        this.companyService = new CompanyService(url);
    }
    public async getUsersByCompanyTitle(title: string) {
        try {
            const users = await this.companyService.fetchCompanyDetailsBasedOnTitle(title);
            console.log(`Users in Company with Title: ${title}`);
            users.map(user => { 
                console.log(`Name: ${user.firstName} ${user.lastName}, Company: ${user.company.name}`);
            });
        } catch (error) {
            console.error('Error fetching company data:', error);
        }
    }
}
