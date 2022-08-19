import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  token: any;

  constructor(private httpService:HttpService) { 

    this.token = localStorage.getItem("token")
  }

  addToWishlist(bookId:any){
    console.log("The token is",this.token)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "bearer " + this.token,
      })
    }
    return this.httpService.postService('wishlist/'+bookId,null,true,httpOptions)
  }
}
