import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UploadFilesModalController } from './uploadFilesModalController';
import { UploadFilesServices } from '../../providers/upload-files.service';
import { UserServices } from '../../providers/user.service';
import { ProfessorsServices } from '../../providers/professor.service';
import { AlumniServices } from 'src/app/providers/alumni.service';

@Component({
  selector: 'app-upload-files-modal',
  templateUrl: './upload-files-modal.component.html',
  styles: []
})
export class UploadFilesModalComponent implements OnInit {

  userOnline:User
  token: string
  imgUpload: File
  temporaryImg: any

  constructor(public _modalService: UploadFilesModalController,
              private _uploadFilesServices:UploadFilesServices,
              private _userServices:UserServices,
              private _professorServices:ProfessorsServices,
              private _alumniServices:AlumniServices) {

    this.userOnline = this._userServices.userOnline;
    this.token = this._userServices.token;
  }

  ngOnInit() {
  }

  uploadImg() {

    let id = this._modalService.id;
    let type = this._modalService.type;

    this._uploadFilesServices.updateFile(this.imgUpload, type, id)
      .then((res: any) => {
        if(res.user){
        if(res.user._id === this.userOnline._id){
            this._userServices.saveInStorage(res.user._id, res.user, this.token);
        }
          this._userServices.updateUserfromOutside(res.user)    
       }

       if(res.project){

       }

       if(res.professor){
        this._professorServices.updateProfessor(res.professor)
       }
       if(res.alumni){
         this._alumniServices.updateAlumni(res.alumni)
       }
      
          this.hideModal();
          
          if(type==='users'){
            swal("IMAGEN SUBIDA!", res.user.img, "success");
          } 
          if (type === 'projects') {
          swal("IMAGEN SUBIDA!", res.project.img, "success");
           } 
      })
      .catch(res => { console.log(res) })
  }

  selectImg(file: File) {
    //console.log(file)

    if (!file) { this.imgUpload = null; return }

    if (file.type.indexOf('image') < 0) {
      this.imgUpload = null;
      swal('JUST IMAGES', 'THE SELECTED FILE IS NOT AN IMAGE', 'error');
      return;

    }
    this.imgUpload = file;

    let reader = new FileReader();
    let urlImgTemp = reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.temporaryImg = reader.result;
    }
    //this.temporalImage
  }

  hideModal() {
    this._modalService.hideModal()
    this.temporaryImg = null;
    this.imgUpload = null;
  }
}
