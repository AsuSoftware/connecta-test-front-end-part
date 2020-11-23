import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/master-data/employee';

@Component({
  selector: 'app-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.css']
})
export class PageUsersComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) { }

  employeeList: Employee[] = []; // list of employee from back-end


// TODO: trebuie sa verific fieldurile aici daca sunt toate si daca merg facand un console log cand trimit ceva
  employeeData: FormGroup = this.fb.group({
    name: ['', Validators.compose([Validators.required])],
    surname: ['', Validators.compose([Validators.required])],
    phone: [''],
    mobile: [''],
    email: [''],
    active: ['', Validators.compose([Validators.required])],
    note: [''],
    insert_by: ['Me'],
    insert_date: [''],
    modify_by: [''],
    modify_date: [''],
    delete_by: [''],
    deleted_date: [''],
    business_roles: this.fb.group({
      description: ['', Validators.compose([Validators.required])],
      insert_by: ['Me'],
      insert_date: [''],
      modify_by: [''],
      modify_date: [''],
      deleted_by: [''],
      deleted_date: [''],
    }),
    office: this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      district: [''],
      postal_code: [''],
      locality: [''],
      city: [''],
      vat: [''],
      phone: [''],
      pec: [''],
      email: [''],
      insert_by: ['Me'],
      insert_date: [''],
      modify_by: [''],
      modify_date: [''],
      deleted_by: [''],
      deleted_date: [''],
    }),
  });


  ngOnInit(): void {
    this.getAllEmployee(); // When page is load make a request to get all employees in db
  }

  getAllEmployee(): void {
    this.employeeService.getAllEmployee().subscribe(data => this.employeeList = data);
  }

  insertEmployee(): void {
    console.log(this.employeeData.valid);
    console.log(this.employeeData.value);
    if (this.employeeData.valid) {
      this.employeeService.addEmployee(this.employeeData.value).subscribe(data => console.log(data));
    }
  }

  updateEmployee(): void {
   if (this.employeeData.valid) { // if form controll is valid
     this.employeeService.updateEmployee(this.employeeData.value)
    .subscribe(data => console.log(data));
   }
  }

  removeEmployee(employeeId: string): void {
    this.employeeService.removeEmployee(employeeId).subscribe(data => console.log(data));
  }

  getStatusOfEmployee(employee: Employee): string {
    if (employee.active === 'Active') {
      return 'badge badge-success';
    } else if (employee.active === 'Not Active') {
      return 'badge badge-danger';
    }
  }

  setCurrentElement(employeeId: string): void {
    this.employeeList.forEach(element => {
      if (element.id === employeeId) {
        this.setValuesForEditForm(element);
        console.log(this.employeeData.value);
      }
    });
  }

  setValuesForEditForm(employee: Employee): void {
    this.employeeData.setValue({
      id: employee.id,
      name: employee.name,
      surname: employee.surname,
      phone: employee.phone,
      mobile: employee.mobile,
      email: employee.email,
      active: employee.active,
      note: employee.note,
      insert_by: employee.insert_by,
      insert_date: employee.insert_date,
      modify_by: employee.modify_by,
      modify_date: employee.modify_date,
      delete_by: employee.delete_by,
      deleted_date: employee.deleted_date,
      business_roles: this.fb.group({
        description: employee.business_roles.description,
        insert_by: employee.business_roles.insert_by,
        insert_date: employee.business_roles.insert_date,
        modify_by: employee.business_roles.modify_by,
        modify_date: employee.business_roles.modify_date,
        deleted_by: employee.business_roles.deleted_by,
        deleted_date: employee.business_roles.deleted_date,
      }),
      office: this.fb.group({
        name: employee.office.name,
        address: employee.office.address,
        district: employee.office.district,
        postal_code: employee.office.postal_code,
        locality: employee.office.locality,
        city: employee.office.city,
        vat: employee.office.vat,
        phone: employee.office.phone,
        pec: employee.office.pec,
        email: employee.office.email,
        insert_by: employee.office.insert_by,
        insert_date: employee.office.insert_date,
        modify_by: employee.office.modify_by,
        modify_date: employee.office.modify_date,
        deleted_by: employee.office.deleted_by,
        deleted_date: employee.office.deleted_date,
    })
  });
}
}
