import { Component} from '@angular/core';
import { UserServices } from '../../providers/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor(public _userServices:UserServices) {}
}