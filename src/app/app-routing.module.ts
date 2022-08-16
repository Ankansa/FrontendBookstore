import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetAllBooksComponent } from './component/get-all-books/get-all-books.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  // {path: 'books', component: GetAllBooksComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    children: [{path: 'books', component: GetAllBooksComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
