import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TweetDialogComponent } from 'src/app/tweet-dialog/tweet-dialog.component';

@Component({
  selector: 'app-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.css']
})
export class TweetBoxComponent implements OnInit {

  @ViewChild('fileInput') el:ElementRef;

  row : number = 1;

  base64Img : string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }


  fun(event)
  {
    console.log(event);

    let len = event.length;

    console.log(  )

    let row = Math.ceil( len / 35 );

    this.row = row;

  }


  loadAllImages(files: any) {
    let filesLength = files.length;
    for (let i = 0; i < filesLength; i++) {
      if (files[i].type == 'image/jpeg' || files[i].type == 'image/jpg' || files[i].type == 'image/png' || files[i].type == 'image/jfif' || files[i].type == 'image/gif') {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            const promise = new Promise((resolve, reject) => {
              resolve(event.target.result)
            })
            promise.then(( data : any) => {
              this.base64Img = data;
                // console.log( data , 'base64 data' );
                this.el.nativeElement.value = '';
                // this.openDialog(data);
            })
          };
          reader.readAsDataURL(files[i]);
      } else {
        // this.snack.open('Invalid File Format. Accepted File Format: /jpg, /jpeg, /png, /jfif, /gif', 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['error-snackbar'] });
        console.log( 'Invalid File Format. Accepted File Format: /jpg, /jpeg, /png, /jfif, /gif' );
      }
    }
  }


  // openDialog(data) {
  //   this.dialog.open(TweetDialogComponent, {
  //     data: {
  //       image : data,
  //     },
  //   });
  // }

}
