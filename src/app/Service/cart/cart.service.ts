import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token: any;

  constructor(private httpService: HttpService) {

    this.token = localStorage.getItem("token")
  }

  addToCart(bookId: any) {
    console.log("The token is", this.token)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    return this.httpService.postService('cart/' + bookId, null, true, httpOptions)
  }

  viewCart() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    return this.httpService.getService('cart/', true, httpOptions)
  }


  removeAllBook(bookId: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    return this.httpService.putService("cart/"+ bookId, null, true, httpOptions)
  }

  addAddress(data:any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    return this.httpService.postService('customer/', data, true, httpOptions)
  }

  purchased(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    return this.httpService.putService('cart/purchased/true', null, true, httpOptions)
  }
}