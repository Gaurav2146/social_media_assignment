import { Component, OnInit } from '@angular/core';
import { TweetDialogComponent } from '../tweet-dialog/tweet-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(TweetDialogComponent, {
      data: {
        // image : data,
      },
    });
  }

}
