import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  userModel;

  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.authService
      .getUserList()
      .subscribe(this.bindingData);
  }

  bindingData = (data) => {
    this.userModel = data;
  }
}
