import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostingapiService {
  apiUrl:string="https://localhost:7004/api/v1"
  constructor(private http:HttpClient) { } 
  addPosting(posting:any) {
    return this.http.post(this.apiUrl+"/posts/add",posting);
  }  
  viewPosting(officer_id:number) {
    return this.http.get<any>(this.apiUrl+"/posts/getposting/"+officer_id);
  }
}
