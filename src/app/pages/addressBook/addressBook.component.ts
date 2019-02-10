import { Component, OnInit} from '@angular/core';
import { UserServices } from '../../providers/user.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-adressBook',
  templateUrl: './addressBook.component.html',
  styleUrls: ['./addressBook.component.scss']
})
export class AddressBookComponent implements OnInit {

  token:string;
  item:string;

  constructor(private _userServices:UserServices,  
            
              private activatedRoute:ActivatedRoute) { 

  this.token = this._userServices.token; 
}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.item = params['item'];
    })
}
}
