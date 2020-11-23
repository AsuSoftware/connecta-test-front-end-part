import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDepartamentComponent } from './company-departament.component';

describe('CompanyDepartamentComponent', () => {
  let component: CompanyDepartamentComponent;
  let fixture: ComponentFixture<CompanyDepartamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDepartamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
