import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chatapp';
  notLoggedIn= true;

  constructor() {
  }
  ngOnInit(): void {
    if (localStorage.getItem('token'))
      this.notLoggedIn=false;
  }


}
