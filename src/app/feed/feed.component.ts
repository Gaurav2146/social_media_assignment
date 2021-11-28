import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ThrowStmt } from '@angular/compiler';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  Posts = [];
  constructor( private userService : UserService , private snackbar : MatSnackBar) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts()
  {
    this.userService.getPosts().subscribe((data)=>{
      console.log( data , 'data' );
      this.Posts = data;
      // this.snackbar.open("Tweet Fetched Successfully!", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
      
    },(error)=>{
      // this.snackbar.open("Something Went Wrong!", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
    })
  }

}
