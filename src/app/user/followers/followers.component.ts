import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor( private user_service : UserService , private snackbar : MatSnackBar ) { }

  Follow = "Follow";

  @Input('name') name : string = "";
  @Input('email') email : string = "";
  @Input('userId') userId : string = "";

  ngOnInit(): void {

  }

  addFollower()
  {
     this.user_service.addFollower({ followerId : this.userId }).subscribe((data)=>{
      console.log(data);
      this.Follow = "Following";
      this.snackbar.open("Followed Successfully", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
     },(error)=>{
      this.snackbar.open("Something went wrong!", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
     })
  }

}
