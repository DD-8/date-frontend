import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { NzThSelectionComponent } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  users: User[] = [];
  offset: string = "";
  userName: string = "";
  dateOfBirth: Date = new Date();
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAllUsers();
    let timezone = moment.tz.guess();
    this.offset = 'UTC' + moment.tz(timezone).format('Z');
    console.log("🚀 ~ file: welcome.component.ts:22 ~ WelcomeComponent ~ ngOnInit ~ this.timeZone", this.offset)
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  addUser() {
    let user: User = { name: this.userName, createdDate: new Date(), dateOfBirth: new Date(this.dateOfBirth.getFullYear(), this.dateOfBirth.getMonth(), this.dateOfBirth.getDate()) } as User;
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
