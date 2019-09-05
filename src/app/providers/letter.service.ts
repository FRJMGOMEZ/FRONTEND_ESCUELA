import { Injectable } from '@angular/core';
import { UserServices } from './user.service';
import { timer } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LetterService {

  public letterContent: HTMLElement
  public letterBottom: HTMLElement

  public users:User[]=[]

  constructor(private _userServices:UserServices) { }

  getUsers(){
    this._userServices.getUsers().subscribe(()=>{
      timer().subscribe(async()=>{
        this.users = await this._userServices.users.filter((user) => { return user.role === 'ADMIN_ROLE' && user._id != this._userServices.userOnline._id });
      })
    })
  }
}
