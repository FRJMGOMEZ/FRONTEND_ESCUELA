import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ProjectServices } from '../providers/project.service';
import { UserServices } from '../providers/user.service';
import { User } from '../models/user.model';

@Directive({
  selector: '[appProjectRole]'
})
export class ProjectRoleDirective {

  constructor(private _projectServices:ProjectServices, private _userServices:UserServices, private el:ElementRef, private renderer:Renderer2) {
      if (!this._projectServices.administrators.map((adm:User)=>{return adm._id}).includes(this._userServices.userOnline._id)) {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
      } 
   }
}
