
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Login } from '../models/login.model';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) {}

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();

    if(!token) {
      return false;
    } else if (this.isTokenExperid(token)) {
      return false;
    }

    return true;
  }

  async authUser(login: Login): Promise<boolean> {
    const result = await this.http.post<any>(`${environment.postLogin}`, login).toPromise();
    if (result && result.token) {
      localStorage.setItem('token', result.token);
      return (true);
    }

    return false;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token')
    return token;
  }

  logout() {
    window.localStorage.removeItem('token');
  }

  getTokenExpirationDate(token: string): Date {
    const helper = new JwtHelperService();
    const decoded = helper.decodeToken(token);

    if(decoded.exp === undefined) {
      return decoded || null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExperid(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }
}
