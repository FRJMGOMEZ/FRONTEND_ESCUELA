import { Component, OnInit } from '@angular/core';
import { ImgModalController } from './imgModal.controller';
import { ChatServices } from '../../providers/chat.service';
import { title } from 'process';

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.component.html',
  styleUrls: ['./img-modal.component.css']
})
export class ImgModalComponent implements OnInit {

  image:string
  type:string

  constructor( public _modalController:ImgModalController,
               private _chatServices:ChatServices) {

                }
  ngOnInit() {
    this._modalController.notification.subscribe((image:string)=>{
    this.image = image;
    this.type = this._modalController.type;
    })
  }

  downloadImg(image?:any){
    if(image){
      this._chatServices.getFile(image).subscribe((res) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(res);
        a.download = title;
        document.body.appendChild(a);
        a.click();
      })
    }
    else{
      this._chatServices.getFile(this.image).subscribe((res) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(res);
        a.download = title;
        document.body.appendChild(a);
        a.click();
      })
    }
  }

  hideModal(){
    this.image = null
    this._modalController.hideModal()
  }

}
