import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDepartamentComponent } from './company-departament/company-departament.component';
import { CompanyRolesComponent } from './company-roles/company-roles.component';
import { CompanyUnitsComponent } from './company-units/company-units.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageUsersComponent } from './page-users/page-users.component';
import { PageFaqsComponent } from './page-faqs/page-faqs.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDepartamentComponent,
    CompanyRolesComponent,
    CompanyUnitsComponent,
    HomeComponent,
    NavBarComponent,
    PageUsersComponent,
    PageFaqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
