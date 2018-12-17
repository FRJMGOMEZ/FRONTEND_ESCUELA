import { Component, OnInit } from '@angular/core';
import { ImgModalController } from './imgModal.controller';
import { ChatServices } from '../../providers/chat.service';
import { title } from 'process';
import { ProjectServices } from '../../providers/project.service';
import { UserServices } from '../../providers/user.service';

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.component.html',
  styleUrls: ['./img-modal.component.css']
})
export class ImgModalComponent implements OnInit {

  token:string

  image:string

  images:string[] = []

  constructor( public _modalController:ImgModalController,
               private _chatServices:ChatServices,
               private _projectServices:ProjectServices,
               private _userServices:UserServices) {

                this.token= this._userServices.token
                }
  ngOnInit() {

    this._modalController.notification.subscribe((res)=>{

      if(res){

        if(res.src){
        
          this.image= res.src
        }
      }else{

        this._projectServices.searchProjectById(this._modalController.id,this.token).subscribe((project)=>{

         this.images = project.imagenes
        })
      }
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

      console.log(this.image)
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

    this.images = []
    this.image = null

    this._modalController.hideModal()
  }

}
