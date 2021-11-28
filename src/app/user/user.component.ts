import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users_to_follow : any = [];
  constructor( private userService : UserService ) { }

  ngOnInit(): void {

    this.getUsersToFollow();
  }

  getUsersToFollow()
  {
    this.userService.getUsersToFollow().subscribe((data)=>{
      this.users_to_follow = data;
    },(error)=>{
      console.log(error);
    })
  }

}
