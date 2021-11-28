import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private router : Router , private signin : SigninService ) { }

  @ViewChild('name') name:ElementRef;
  @ViewChild('email') email:ElementRef;
  @ViewChild('password') password:ElementRef;

  ngOnInit(): void {
  }

  goToLogin()
  {
    this.router.navigate(['/login'])
  }

  signUp()
  {
    console.log(  this.name.nativeElement.value ,  this.email.nativeElement.value , this.password.nativeElement.value )


    let obj = {
       email : this.email.nativeElement.value,
       name : this.name.nativeElement.value, 
       password : this.password.nativeElement.value
    }

    this.signin.register(obj).subscribe((data)=>{
       console.log(data , 'data');
    })

  }

}
