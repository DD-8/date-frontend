import { DateService } from './../../services/date.service';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NzThSelectionComponent } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  users: User[] = [];
  userName: string = "";
  createdDate: Date = new Date();
  dateOfBirth: Date = new Date();

  constructor(
    private userService: UserService,
    private dateService: DateService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser() {
    console.log(this.dateOfBirth);
    let user: User = { name: this.userName, createdDate: this.createdDate, dateOfBirth: this.dateService.setDateWithTimezoneOffset(this.dateOfBirth) } as User;
    this.userService.addUser(user).subscribe(() => {
      this.getAllUsers();
    });
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(() => {
      this.getAllUsers();
    });
  }

}
