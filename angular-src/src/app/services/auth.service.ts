import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: String = '';
  user: User[] = [];

  constructor(private http: HttpClient) { }

  registerUser(user: User): any {
    return this.http.post('http://localhost:3000/users/register', user)
  }
}
