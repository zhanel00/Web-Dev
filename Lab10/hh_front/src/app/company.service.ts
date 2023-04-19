import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Company } from './models';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = 'https://localhost:8000/companies';

  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(this.baseUrl + `/`)
  }

  getCompany(id: number): Observable<Company> {
    return this.client.get<Company>(this.baseUrl + `/${id}`)
  }

}
