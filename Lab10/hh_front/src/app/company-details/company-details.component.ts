import {Component, OnInit} from '@angular/core';
import { Vacancy } from "../models";
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  vacancies: Vacancy[];
  loaded: boolean;
  companyId: number | undefined;

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute
  ) {
    this.vacancies = [];
    this.loaded = true;
  }

  getCompanyId(): number {
    this.route.paramMap.subscribe((params) => {
      this.companyId = Number(params.get('id')) })
    return <number>this.companyId;
  }

  getVacancies() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.companyService.getVacanciesByCompany(id).subscribe((vacancies) => {
        this.vacancies = vacancies;
        this.loaded = true;
      });
    })
  }
  ngOnInit(): void {
    this.getVacancies();
  }

}
