import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { User } from '../../../../server/shared/interfaces/users/user';


@Injectable()
export class AuthService {
  private prefix;

  constructor (private http: HttpClient) {
    this.prefix = `${environment.api_url}/users`;
  }

  getUserList (): Observable<User[]> {
    return this.http.get<User[]>(this.prefix);
  }
}
