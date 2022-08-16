import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  token: any;

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem("token")
  }

  getAllBooks() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    // console.log("Data in book services : ", data);
    return this.httpservice.getService('book', true, httpOptions)

  }
}
