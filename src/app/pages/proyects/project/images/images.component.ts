import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../project.component';
import { ChatServices } from '../../../../providers/chat.service';
import { title } from 'process';
import { ImgModalController } from '../../../../modals/img-modal/imgModal.controller';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images:string[] =  []
  files:string[]=[]

  constructor(private projectComponent:ProjectComponent,
              private _chatServices:ChatServices,
              private _imgModalController:ImgModalController) { }

  ngOnInit() {

    this.images = this.projectComponent.project.imagenes

    this.projectComponent.notification.subscribe((res)=>{

      if(res){

        if (res.image) {

          this.images.push(res.image)
        }

        if(res.file){

          this.files.push(res.file)
        }
      }
      else {
        this.images = this.projectComponent.project.imagenes;
      }
    })
  }

  downloadImg(img?:any){

    this._imgModalController.showModal(this.projectComponent.project._id)

    if(img){
      this._imgModalController.notification.emit({ src: img.src })
    }

    else{
      this._imgModalController.notification.emit()
    }
  }

}
