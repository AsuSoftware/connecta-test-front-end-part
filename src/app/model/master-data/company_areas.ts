import { Offices } from './offices';
import { Employee } from './employee';

export class Company_areas {
    id: string;
    name: string;
    description: string;
    insert_by: string;
    insert_date: string;
    modify_by: string;
    modify_date: string;
    deleted_by: string;
    deleted_date: string;
    office: Offices;
}