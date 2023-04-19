import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyListComponent} from "./company-list/company-list.component";
import {CompanyDetailsComponent} from "./company-details/company-details.component";

const routes: Routes = [
  { path: 'companies', component: CompanyListComponent},
  { path: 'companies/:id', component: CompanyDetailsComponent},
  { path: 'companies/:id/vacancies', component: CompanyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
