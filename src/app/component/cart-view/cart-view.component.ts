import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { CartService } from 'src/app/Service/cart/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  bookcount: any

  cartBooks: any

  cart:any

  addressDetails = false;

  OrderSummery = false;

  addressForm: FormGroup;

  diseble = true;

  name="Ankan"


  constructor(private cartService: CartService, private formBuilder: FormBuilder,private router: Router, private snakbar: MatSnackBar) { }

  ngOnInit(): void {
    this.viewCart()
    this.addressForm = this.formBuilder.group({
      Name: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      Address: ['', [Validators.required]],
      City: ['', [Validators.required]],
      State: ['', [Validators.required]]
    });
  }

  viewCart() {
    console.log("add to viewCart book details is called")
    return this.cartService.viewCart().subscribe((Response: any) => {
      console.log("add to viewCart book details is :", Response.data.books)
      this.cartBooks = Response.data.books
      this.bookcount = Response.data.books.length
      this.cart=Response.data
    })
  }

  addressDetailsView() {
    console.log("addressDetailsView () called")
    if(this.addressDetails == false){
      this.addressDetails = true
    }else{
      this.addressDetails = false
    }
  }


  OrderSummeryView() {
    console.log("OrderSummeryView () called")
    if(this.OrderSummery == false){
      this.OrderSummery = true
    }else{
      this.OrderSummery = false
    }
  }

  removeAllBook(bookId: any) {
    console.log("removeAllBook called for remoove book from cart", bookId)
    return this.cartService.removeAllBook(bookId).subscribe((Response: any) => {
      console.log("remove book done, rest of book details is :", Response.data.books)
    })
  }

  addAddress() {
    console.log("Add adress is called")
    if (this.addressForm.valid) {
      console.log("The input address data is: ", this.addressForm.value)

      this.cartService.addAddress(this.addressForm.value).subscribe((responce: any) => {
        console.log("The addAddress responce is :", responce)

        this.snakbar.open('Address Added Sucessfull', 'Ok', {
          duration: 4000
        });

      }, (error: any) => {
        console.log("The error is: ", error);
        this.snakbar.open(error.error.message, 'Ok', {
          
        });
      })
    }
  }

  purchased() {
    console.log("purchased is called")
    if (this.addressForm.valid) {
      console.log("The input address data is valid: ", this.addressForm.value)

      this.cartService.purchased().subscribe((responce: any) => {
        console.log("The purchased responce is :", responce)

        this.snakbar.open('purchased Sucessfull', 'Ok', {
          duration: 4000
        });
        this.router.navigateByUrl('/dashboard/order_placed');
      }, (error: any) => {
        console.log("The error is: ", error);
        this.snakbar.open(error.error.message, 'Ok', {
        });
      })
    }else{
      this.snakbar.open("Please enter a proper address", 'Ok', {
      });
    }
  }

}


