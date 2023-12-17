import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficersapiService {
  apiUrl:string="https://localhost:7004/api/v1"
  //apiUrl:string="http://localhost/RAW-Officers/api/v1"
  constructor(private http: HttpClient) { 
    
  }   
  getOfficersList() {
    return this.http.get(this.apiUrl+"/officers/all");
  }
  addOfficer(officer:any) {
    return this.http.post(this.apiUrl+"/officers/add",officer);
  } 
  getOfficerById(id:number) {
    return this.http.get<any>(this.apiUrl+"/officers/getbyid/"+id);
  }
  updateOfficer(form:any,id:number) {
    return this.http.put<any>(this.apiUrl+"/officers/update/"+id,form);
  }
  
}
