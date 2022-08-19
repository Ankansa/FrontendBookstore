import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token: any;

  constructor(private httpService:HttpService) { 

    this.token = localStorage.getItem("token")
  }

  addToCart(bookId:any){
    console.log("The token is",this.token)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    return this.httpService.postService('cart/'+bookId,null,true,httpOptions)
  }

  viewCart(){
    console.log("The token is",this.token)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    return this.httpService.getService('cart/',true,httpOptions)
  }
}
