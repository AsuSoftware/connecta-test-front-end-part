import { Employee } from './employee';
import { Business_Roles } from './business_roles';
import { Company_areas } from './company_areas';

export class Offices {
    id: string;
    name: string;
    address: string;
    district: string;
    postal_code: string;
    locality: string;
    city: string;
    vat: string;
    phone: string;
    pec: string;
    email: string;
    insert_by: string;
	insert_date: string;
	modify_by: string;
	modify_date: string;
	deleted_by: string;
    deleted_date: string;
    businessRoles: Business_Roles;
}