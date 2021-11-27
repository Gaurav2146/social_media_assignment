import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.css']
})
export class TweetBoxComponent implements OnInit {

  row : number = 1;

  constructor() { }

  ngOnInit(): void {
  }


  fun(event)
  {
    console.log(event);

    let len = event.length;

    let row = Math.ceil( len / 35 );

    this.row = row;

  }

}
