import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  DeleteDatas(data:any){
    return this.http.delete(`${this.baseUrl}/${data.id}`);
  }

  EditDatas(data:any,title:any,des:any){
    return this.http.put(`${this.baseUrl}/${data.id}`,[title,des]);
  }

}
