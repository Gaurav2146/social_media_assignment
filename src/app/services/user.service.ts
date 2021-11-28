import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private apiService : ApiService ) { }

  public addFollower(Obj: any) {
    return this.apiService.request('post', 'user/addFollower', Obj )
  };

  public removeFollower(Obj: any) {
    return this.apiService.request('post', 'user/removeFollower', Obj )
  };

  public getUsersToFollow() {
    return this.apiService.request('get', 'user/getUsersToFollow' )
  };
  

}
