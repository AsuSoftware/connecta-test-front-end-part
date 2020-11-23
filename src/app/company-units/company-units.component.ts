import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficeService } from '../services/office.service';
import { Offices } from '../model/master-data/offices';

@Component({
  selector: 'app-company-units',
  templateUrl: './company-units.component.html',
  styleUrls: ['./company-units.component.css']
})
export class CompanyUnitsComponent implements OnInit {

  offices: Offices[] = [];
  currentElement = '';
  titleForModal = ''; // i use this to make just one modal for the create and update part
  constructor(private fb: FormBuilder, private office: OfficeService) { }

  companyUnit: FormGroup = this.fb.group({
    name: ['', Validators.compose([Validators.required])],
    address: ['', Validators.compose([Validators.required])],
    district: [''],
    city: ['', Validators.compose([Validators.required])],
    email: [''],
    insert_by: [''],
    insert_date: [''],
    modify_by: [''],
    businessRoles: this.fb.group({
      id: [''],
      description: ['', Validators.compose([Validators.required])],
      insert_by: [''],
      modify_by: ['']
    })
  });

  ngOnInit(): void {
    this.getAllOffices();
  }

  createCompany(): void {
    console.log('Intra');
    console.log(this.companyUnit.valid);
    console.log(this.companyUnit.value);
    if (this.companyUnit.valid) {
      this.office.createOffice(this.companyUnit.value).subscribe(data => this.getAllOffices());
    }
  }

  updateCompany(): void {
    if (this.companyUnit.valid && this.currentElement !== '') {
      console.log(this.companyUnit.value);
      this.office.updateOffice(this.currentElement, this.companyUnit.value).subscribe(data => this.getAllOffices());
    }
  }

  getAllOffices(): void {
    this.office.getAllOffices().subscribe(data => this.offices = data, err => console.log(err));
  }

  deleteCompany(id: string): void {
    this.office.deleteOffice(id).subscribe(data => this.getAllOffices());
  }

  getIdToEditElement(id: string): void {
    if (id !== '' || id !== null) {
      this.currentElement = id;
      this.insertValueInForm();
     }
    console.log(id);
  }

  getIdToRemoveElement(id: string): void {
    if (id !== '' || id !== null) {
      this.currentElement = id;
      this.deleteCompany(this.currentElement);
     }
  }

  resetForm(): void {
    this.titleForModal = 'Add';
    this.companyUnit.setValue({
      name: '',
      address: '',
      district: '',
      city: '',
      email: '',
      insert_by: '',
      insert_date: '',
      modify_by: '',
      businessRoles: {
       id: '',
       description: '',
       insert_by: '',
       modify_by: ''
    }
     });
  }

  // this is used to prepopulate fields in form edit
  insertValueInForm(): void {
    this.offices.forEach(office => {
      if (office.id === this.currentElement) {
        this.companyUnit.setValue({
         name: office.name,
         address: office.address,
         district: office.district,
         city: office.city,
         email: office.email,
         insert_by: office.insert_by,
         modify_by: office.modify_by,
         insert_date: office.insert_date,
         businessRoles: {
           id: office.businessRoles.id,
           description: office.businessRoles.description,
           insert_by: office.businessRoles.insert_by,
           modify_by: office.businessRoles.modify_by
         }
        });
      }
    });
  }

}
