import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-departament',
  templateUrl: './company-departament.component.html',
  styleUrls: ['./company-departament.component.css']
})
export class CompanyDepartamentComponent implements OnInit {

  modalName = ''; // to use modal for add and edit
  
  constructor() { }

  ngOnInit(): void {
  }

  onModalClick(nameOfModal: string): void {
    this.modalName = nameOfModal;
  }

}
