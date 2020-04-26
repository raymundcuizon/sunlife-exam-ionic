import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../schema';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  notification = '2';
  userinfo: UserInfo = {};
  greetings: string;
  constructor(private api: ApiService) {
    this.getUserInfo();
  }


  ngOnInit() {
    const time = new Date().getHours();
    this.greetings = 'Good ' + (time < 12 ? 'Morning' : time < 18 ? 'Afternoon' : 'Evening');
  }

  getUserInfo() {
    this.api.getUserinfo().subscribe((res) => {
      this.userinfo = res as UserInfo;
    });
  }

}
