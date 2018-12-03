import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _userServices:UserServices) { }

  ngOnInit() {
  }

}
