import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  test: string;

  constructor() {
    this.test = 'Home 화면입니다.';
  }

  ngOnInit() {
  }

}
