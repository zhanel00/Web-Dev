import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company, Vacancy} from './models';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = 'http://127.0.0.1:8000/api/companies';

  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(this.baseUrl + `/`)
  }

  getCompany(id: number): Observable<Company> {
    return this.client.get<Company>(this.baseUrl + `/${id}`)
  }

  deleteCompany(id: number): Observable<Company> {
    return this.client.delete<Company>(this.baseUrl + `/${id}`)
  }

  createCompany(company: Company): Observable<Company> {
    return this.client.post<Company>(this.baseUrl, company)
  }

  getVacanciesByCompany(id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(this.baseUrl + `/${id}` + '/vacancies')
  }

}
