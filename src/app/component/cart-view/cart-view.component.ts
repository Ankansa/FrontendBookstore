import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  bookcount:any

  cartBooks:any

  addressDetails=false;

  OrderSummery=false;

  constructor( private cartService:CartService) { }

  ngOnInit(): void {
    this.viewCart()
  }

  viewCart(){
    console.log("add to viewCart book details is called")
    return this.cartService.viewCart().subscribe((Response:any)=>{
      console.log("add to viewCart book details is :",Response.data.books)
      this.cartBooks=Response.data.books
      this.bookcount= Response.data.books.length
    })
  }

  addressDetailsView(){
    this.addressDetails=true
  }


  OrderSummeryView(){
    this.OrderSummery=true
  }
}
