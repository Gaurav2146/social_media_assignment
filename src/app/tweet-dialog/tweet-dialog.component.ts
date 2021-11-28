import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TweetService } from '../services/tweet.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tweet-dialog',
  templateUrl: './tweet-dialog.component.html',
  styleUrls: ['./tweet-dialog.component.css']
})
export class TweetDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private tweetService : TweetService ,
   private snackbar : MatSnackBar , private userService : UserService
  , public dailogRef: MatDialogRef<TweetDialogComponent>) {}
  @ViewChild('fileInput') el:ElementRef;
  @ViewChild('textinput') text:ElementRef;
  row : number = 1;
  base64Img : string = '';
  description : string = '';

  ngOnInit(): void {
    console.log( this.data , 'data' )
  }
  
  fun(event)
  {
    this.description = event;
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

  saveProductDetailsStepThree() {
    if(!this.description && !this.base64Img)
    {
        return;
    }
    let body = {
      image : this.base64Img , 
      description : this.description,
    }
      this.tweetService.createTweet(body).subscribe((result: any) => {
        if (result.success === true) {
          console.log(result);
          this.base64Img = '';
          this.text.nativeElement.value='';
          this.dailogRef.close();
          this.userService.newTweet.next('new Tweet');
          this.snackbar.open("Tweet done Successfully!", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
        }
      }, (error) => {
        this.dailogRef.close();
        this.snackbar.open("Something went wrong!", 'X', { horizontalPosition: 'end', verticalPosition: 'bottom', duration: 4000, panelClass: ['info-snackbar'] });
      });
  }

  
}
