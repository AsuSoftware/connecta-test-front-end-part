import { Business_Roles } from './business_roles';
import { Login } from './login';
import { Offices } from './offices';

export class Employee {
    id: string;
    name: string;
    surname: string;
    phone: string;
    mobile: string;
    email: string;
    active: string;
    note: string;
    insert_by: string;
    insert_date: string;
    modify_by: string;
    modify_date: string;
    delete_by: string;
    deleted_date: string;
    business_roles: Business_Roles; // un employee può avere più ruoli
    // login: Login[];
    office: Offices;
}