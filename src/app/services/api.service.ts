import { Injectable , Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

/*
    interface for token
 */
interface TokenResponse {
  token: string;
}

@Directive()
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = environment.apiEndPoint;
  token: any = '';
  env: string = '';

  constructor(
    private http: HttpClient) { }

  /*
      save token into localStorage as a item with specific key
   */
  public saveToken(token: string): void {
    localStorage.setItem('sdasd923hd9dwe', token);
    this.token = token;
  }

  /*
      call for fetch token from localStrogae
   */
  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('sdasd923hd9dwe');
    }
    return this.token;
  }

  /*
      fetch user token details
   */
  public getUserDetails(): any {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  /*
      call for check the user session
   */
  public isLoggedIn(): boolean {
    const user = localStorage.getItem('sdasd923hd9dwe');
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  /*
      all type of api call handlers at client side and send token in header in all GET api call to verify valid user
      application at back end match user token with this token, if both token are match means this is a valid user otherwise
      return with a exception invalid user
   */
  public request(method: 'post' | 'get', type: string, user?: any, paramslist?: any): Observable<any> {
    let base;

    if (method === 'post') {
      if (type === 'registration' || type === 'login' || type === 'securityauth') {
        base = this.http.post<any>(`${this.apiURL}/` + type, user, {
          withCredentials: true
        });
      } else {

        base = this.http.post<any>(`${this.apiURL}/` + type, user, {
          headers: { Authorization: `Bearer ${this.getToken()}` },
          withCredentials: true,
        });

      }
    } else {
        base = this.http.get<any>(`${this.apiURL}/` + type, {
        headers: { Authorization: `Bearer ${this.getToken()}` },
        withCredentials: true,
        params: paramslist
      });
    }
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data !== null && data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

}
