import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyRolesComponent } from './company-roles/company-roles.component';
import { PageUsersComponent } from './page-users/page-users.component';
import { CompanyUnitsComponent } from './company-units/company-units.component';
import { PageFaqsComponent } from './page-faqs/page-faqs.component';
import { CompanyDepartamentComponent } from './company-departament/company-departament.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'company-roles', component: CompanyRolesComponent },
  { path: 'company-units', component: CompanyUnitsComponent },
  { path: 'company-departament', component: CompanyDepartamentComponent },
  { path: 'page-users', component: PageUsersComponent },
  { path: 'pages-faqs', component: PageFaqsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
