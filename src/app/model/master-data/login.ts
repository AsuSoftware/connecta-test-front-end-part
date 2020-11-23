import { Employee } from './employee';

export class Login {
    username: string;
	password: string;
	expire_date: string;
	user_type: string;
	active: string;
	insert_by: string;
	insert_date: string;
	modify_by: string;
	modify_date: string;
	deleted_by: string;
	deleted_date: string;
	employee: Employee[];
}
