import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tweet-dialog',
  templateUrl: './tweet-dialog.component.html',
  styleUrls: ['./tweet-dialog.component.css']
})
export class TweetDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  @ViewChild('fileInput') el:ElementRef;
  row : number = 1;
  base64Img : string = '';

  ngOnInit(): void {
    console.log( this.data , 'data' )
  }
  
  fun(event)
  {
    console.log(event);
    let len = event.length;
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


  

}
