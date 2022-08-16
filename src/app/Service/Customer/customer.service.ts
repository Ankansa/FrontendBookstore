import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpService : HttpService) { }

  registration(data:any){
    let httpOptions = {
      httpOptions: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('users',data,false,httpOptions)
  }


  login(data:any){
    let httpOptions = {
      httpOptions: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('users/login',data,false,httpOptions)
  }

}
