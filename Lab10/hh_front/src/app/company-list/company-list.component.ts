import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[];
  loaded: boolean;
  newCompany: Company;
  constructor(private companyService: CompanyService) {
    this.companies = [];
    this.loaded = true;
    this.newCompany = {} as Company;
  }

  getCompanies() {
    this.loaded = false;
    this.companyService.getCompanies().subscribe( (companies) => {
      this.companies = companies;
      this.loaded = true;
    });
  }

  deleteCompany(id : number) {
    this.companyService.deleteCompany(id).subscribe((response) => {
      this.companies = this.companies.filter(c => c.id != id);
    })
  }

  createCompany() {
    this.loaded = false;
    this.companyService.createCompany(this.newCompany).subscribe((company) => {
      this.companies.push(company);
      this.loaded = true;
      this.newCompany = {} as Company;
    });
  }

  ngOnInit(): void {
    this.getCompanies();
  }
}
