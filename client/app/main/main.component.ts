import { Component, OnInit, ViewChild } from '@angular/core';
import { NavComponent } from '../core/nav/nav.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild(NavComponent)
  navComponent: NavComponent;
  actionParents;
  isLoading = false;

  constructor() {

  }

  ngOnInit() {
  }

}
