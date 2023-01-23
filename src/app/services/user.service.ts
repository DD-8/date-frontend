import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("https://localhost:44313/api/Users/GetAllUsers");
  }

  addUser(user: User): Observable<void> {
    return this.httpClient.post<void>("https://localhost:44313/api/Users/AddUser", user);
  }

  deleteUser(user: User): Observable<void> {
    return this.httpClient.post<void>("https://localhost:44313/api/Users/DeleteUser", user);
  }
}
