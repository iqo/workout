import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstname = localStorage.getItem('firstname');
  lastname = localStorage.getItem('lastname');
  picture: string;
  constructor(public auth: AuthService)  {
    auth.handleAuthentication();
    this.picture = localStorage.getItem('picture');
  }

  ngOnInit() {

  }


}
