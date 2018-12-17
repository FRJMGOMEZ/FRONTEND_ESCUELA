import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAvoidClose]'
})
export class AvoidCloseDirective {

  constructor(private el:ElementRef) {
    
}


@HostListener('onclick')avoidClose(event){

 


}




}
