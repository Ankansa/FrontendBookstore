import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { DataServiceService } from 'src/app/Service/data/data-service.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  hide = true;
  changeView = false;


  registerForm: FormGroup;
  loginForm: FormGroup;
  submitted = false;




  constructor(private formBuilder: FormBuilder, private customerService: CustomerService,
    private snakbar: MatSnackBar, private router: Router, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', Validators.required]



    });

    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });


  }

  view() {
    console.log("View function called")
    this.changeView = true;
    // this.viewColor="warn";

  }
  view2() {
    console.log("View function called")
    this.changeView = false;
    // this.viewColor="warn";

  }



  registration() {
    console.log("registration called")
    if (this.registerForm.valid) {
      console.log("The input registration data is: ", this.registerForm.value)

      this.customerService.registration(this.registerForm.value).subscribe((responce: any) => {
        console.log("The registration responce is :", responce)

        this.snakbar.open('Registration Sucessfull', 'Ok', {
          duration: 4000
        });

      }, (error: any) => {
        console.log("The error is: ", error);
        this.snakbar.open(error.error.message, 'Ok', {
        });
      })
    }
  }

  login() {
    console.log("login called")
    if (this.loginForm.valid) {
      console.log("The input login data is :", this.loginForm.value)
      this.customerService.login(this.loginForm.value).subscribe((responce: any) => {
        console.log("The login responce is :", responce)
        localStorage.setItem('token', responce.data.brtoken);
        localStorage.setItem('Name', responce.data.Name);


        // this.dataService.username.next(responce.data.Name)


        this.router.navigateByUrl('/dashboard/books');
        this.snakbar.open('Login Sucessfull', 'Ok', {
          duration: 4000
        });

      }, (error: any) => {
        console.log("The error is: ", error);
        this.snakbar.open(error.error.message, 'Ok', {
        });
      })
    }
  }




}