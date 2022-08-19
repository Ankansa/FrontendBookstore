import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookActionComponent } from './component/bookAction/book-action/book-action.component';
import { CartViewComponent } from './component/cart-view/cart-view.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetAllBooksComponent } from './component/get-all-books/get-all-books.component';
import { PlacedOrderComponent } from './component/placed-order/placed-order.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  // {path: 'test', component: GetAllBooksComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'books', component: GetAllBooksComponent },
      { path: 'bookaction', component: BookActionComponent },
      { path: 'cart', component: CartViewComponent },
      { path: 'order_placed', component: PlacedOrderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
