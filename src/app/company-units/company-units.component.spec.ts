import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyUnitsComponent } from './company-units.component';

describe('CompanyUnitsComponent', () => {
  let component: CompanyUnitsComponent;
  let fixture: ComponentFixture<CompanyUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
