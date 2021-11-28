import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private apiService : ApiService , private router : Router) { }

  ngOnInit(): void {
   if( this.apiService.isLoggedIn() )
   {
     this.router.navigate(['./home']);
   }
  }
}
