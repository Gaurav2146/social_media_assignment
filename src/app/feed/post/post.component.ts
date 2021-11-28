import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input('image') image : string = "";
  @Input('description') description : string = "";

  ngOnInit(): void {
  }

  myFunction()
  {
    
  }

}
