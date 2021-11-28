import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor( private apiService : ApiService ) { }  

  public register(Obj : any) {
    return this.apiService.request('post', 'user/registration', Obj)
  };

  public login(Obj : any) {
    return this.apiService.request('post', 'user/login', Obj)
  };

  

}
