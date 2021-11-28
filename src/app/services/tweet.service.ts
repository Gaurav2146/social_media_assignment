import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private apiService : ApiService) { }


  public createTweet(productObject: any) {
    return this.apiService.request('post', 'tweet/createTweet', productObject)
  };


  // public getAllBrands() {
  //   return this.apiService.request('get', 'brand/getBrands');
  // };

}
