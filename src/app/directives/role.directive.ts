import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { UserServices } from '../providers/user.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {

  constructor(private el:ElementRef,private renderer:Renderer2,private _userServices:UserServices) { 
    if(this._userServices.userOnline.role != 'ADMIN_ROLE'){
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
    }
    //this.el.nativeElement.style.display = 'none';
    //this.el.nativeElement.style.display = 'none';
  }
}
