import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private apiService : ApiService , private router : Router , private signin : SigninService , private snackbar : MatSnackBar) { }

  @ViewChild('email') email:ElementRef;
  @ViewChild('password') password:ElementRef;

  ngOnInit(): void {
   if( this.apiService.isLoggedIn() )
   {
     this.router.navigate(['./home']);
   }
  }

  userName : string = '';

  updateUserName(userName)
  {
       
       this.userName = userName;
  }

  updatePassword(password)
  {
    
    this.password = password;
  }


  goToSignupPage()
  {
    this.router.navigate(['/signup'])
  }

  Login()
  {
    console.log( this.email.nativeElement.value  , this.password.nativeElement.value);

    
    let obj = {
      email : this.email.nativeElement.value,
      password : this.password.nativeElement.value
   }

   this.signin.login(obj).subscribe((data)=>{
      console.log(data , 'data');
      this.snackbar.open("Login Successfully", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
    this.router.navigate(['/home'])
   },(error)=>{
    this.snackbar.open("Something Went Wrong In Login", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
   })

  }

}