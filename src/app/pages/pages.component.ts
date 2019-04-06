import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { UserServices } from '../providers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ["./pages.component.css"]
})
export class PagesComponent implements OnInit {

  constructor(private socket:Socket,
              private _userServices:UserServices,
              private router:Router) { }

  ngOnInit() {
    this.socket.on('connect', () => {
      this._userServices.socketOn = true;
    })
    this.socket.on('disconnect',()=>{
      this._userServices.socketOn = false;
      this.router.navigate(['/dashboard']).then(()=>{
        alert('El servidor está fallando disculpa las molestias')
      })
    })
    this._userServices.userOnlineSocket().subscribe()
  }
}
