import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginapiService {
apiUrl:string="http://localhost/RAW-Token/api/v1"
  constructor(private http: HttpClient) { }
  loginUser(form:any) {
    return this.http.post(this.apiUrl+"/RAWAuthentication/authenticate", form);
  }
}
