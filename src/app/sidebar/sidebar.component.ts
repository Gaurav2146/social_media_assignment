import { Component, OnInit } from '@angular/core';
import { TweetDialogComponent } from '../tweet-dialog/tweet-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( public dialog: MatDialog , private router :Router , public snackbar : MatSnackBar) { }

  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(TweetDialogComponent, {
      data: {
        // image : data,
      },
    });
  }

  logout()
  {
    localStorage.clear();
    this.snackbar.open("Logout Successfully", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
    this.router.navigate(['']);
  }

}
