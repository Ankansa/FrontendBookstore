import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart/cart.service';
import { DataServiceService } from 'src/app/Service/data/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  UserName: any
  bookcount: number
  constructor(private dataService: DataServiceService, private cartService: CartService) {
 
  }

  ngOnInit(): void {
    console.log("DAshboard on init called")
    this.cartCount()

    // getting local storage name 
   
    this.UserName = localStorage.getItem("Name")
  }

  logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('Name')

  }

  newMessage(value: any) {
    this.dataService.searchMessage(value)
    console.log("Search bar function calld", value)
  }

  cartCount() {
    console.log("add to viewCart book details is called")
    return this.cartService.viewCart().subscribe((Response: any) => {
      console.log("add to viewCart book details is :", Response.data.books)
      this.bookcount = Response.data.books.length
    })
  }


}
