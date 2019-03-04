import { Component, OnInit, Input } from '@angular/core';
import { ProjectComponent } from '../project.component';
import { ImgModalController } from '../../../../modals/img-modal/imgModal.controller';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  /////Create model of images////

  @Input()images : any[] =  []
  files:string[]=[]

  constructor(private _imgModalController:ImgModalController,
             private projectComponent:ProjectComponent) { }
  ngOnInit() {
    console.log(this.images)
  }

  downloadImg(img?:any){
    this._imgModalController.showModal('imagesProject')
    this._imgModalController.notification.emit(img.src)
  }
}
