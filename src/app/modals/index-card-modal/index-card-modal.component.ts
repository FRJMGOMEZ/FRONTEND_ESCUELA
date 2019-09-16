import { Component, OnInit } from '@angular/core';
import { IndexcardModalController } from './indexcardModalController';
import { IndexcardServices } from '../../providers/indexcard.service';
import { Indexcard } from '../../models/indexcard.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumniServices } from 'src/app/providers/alumni.service';
import { Alumni } from '../../models/alumni.model';
import { Professor } from '../../models/professor.model';
import { ProfessorsServices } from '../../providers/professor.service';
import { Artist } from '../../models/artist.model';
import { UserServices } from 'src/app/providers/user.service';
import { ManagerService } from '../../providers/manager.service';
import { SwalService } from 'src/app/providers/swal.service';

@Component({
  selector: "app-index-card-modal",
  templateUrl: "./index-card-modal.component.html",
  styles: []
})
export class IndexcardModalComponent implements OnInit {

  form: FormGroup;
  role: string;
  creation: boolean = false;
  edition: boolean = false;

  constructor(
    public _modalController: IndexcardModalController,
    private _indexcardServices: IndexcardServices,
    private _alumniServices: AlumniServices,
    private _professorServices: ProfessorsServices,
    public _userServices:UserServices,
    private _managerServices:ManagerService,
    private _swalServices:SwalService
  ) {}

  ngOnInit() {

    this._modalController.notification.subscribe(res => {

      this.role = res;

      this.form = new FormGroup({
        name: new FormControl("", Validators.required),
        surname: new FormControl(""),
        email: new FormControl("", Validators.email),
        mobile: new FormControl(null),
        home: new FormControl(null),
        address: new FormControl("")
      });

      if (this._modalController.id) {
        this.edition = true;
        this._indexcardServices.searchindexcardById(this._modalController.id).subscribe((indexcard:Indexcard)=>{
          this.form.setValue({
            name: indexcard.name,
            surname: indexcard.surname || "",
            email: indexcard.email || "",
            mobile: indexcard.mobile || "",
            home: indexcard.home || "",
            address: indexcard.address || "",
          });
        });
      } else {
        this.creation = true;
      }
    });
  }

  postIndexcard() {
    if (this.form.valid) {
      let value = this.form.value;
      let newIndexcard = new Indexcard(
        this.role,
        value.name || '',
        value.surname || '',
        value.email || '',
        value.mobile ||'',
        value.home ||'',
        value.address || ''
      );
      this._indexcardServices.postIndexcard(newIndexcard).subscribe(async (indexcard: Indexcard) => {
        this.postItem(indexcard)
      })
    }
  }

  putIndexcard() {
    let indexcard;
    let value = this.form.value;
       indexcard = new Indexcard(
         this.role,
         value.name,
         value.surname,
         value.email,
         value.mobile,
         value.home,
         value.address
       );
       this._indexcardServices.putIndexcard(indexcard,this._modalController.id).subscribe((indexcardUpdated:Indexcard)=>{
            this.updateItem(indexcardUpdated)
       })
   }

 async postItem(indexcard:Indexcard){
    if (this.role === "PROFESSOR") {
      let professor = new Professor(indexcard._id);
      await this._professorServices.postProfessor(professor).subscribe();
      this.hideModal();
    } else if (this.role === "ALUMNI") {
      let alumni = new Alumni(indexcard._id);
      await this._alumniServices.postAlumni(alumni).subscribe();
      this.hideModal();
    } else if (this.role === 'ARTIST') {
      let artist:any = {indexcard:indexcard._id}
      await this._managerServices.postArtist(artist).subscribe((artist)=>{
        this.hideModal()
        this._modalController.notification.emit(artist._id)
        this._swalServices.itsCreated("artista",artist.indexcard.name)
      })
    }
  }

  updateItem(indexcard: Indexcard) {

    //// actualizar albums ,tracks y liquidaciones ///
    switch (this.role) {
      case 'ARTIST':
        this._managerServices.artists.forEach((artist, index) => {
          if (artist.indexcard['_id'] === this._modalController.id) {
            this._managerServices.artists[index].indexcard['name'] = indexcard.name;
            this._managerServices.artists[index].indexcard['email'] = indexcard.email;
            this._managerServices.artists[index].indexcard['_id'] = indexcard._id;
          }
        });
            this._managerServices.artist.indexcard['email'] = indexcard.email;
            this._managerServices.artist.indexcard['name'] = indexcard.name;
            this._managerServices.artist.indexcard['_id'] = indexcard._id;
            this.hideModal()
        break;
      case 'ALUMNI': this._alumniServices.alumnis.forEach((alumni, index) => {
        if (alumni.indexcard['_id'] === this._modalController.id) {
          this._alumniServices.alumnis[index].indexcard['name'] = indexcard.name;
          this._alumniServices.alumnis[index].indexcard['email'] = indexcard.email;
          this._alumniServices.alumnis[index].indexcard['_id'] = indexcard._id;
          this.hideModal()
        }
      });
        break;
      case 'PROFESSOR': this._professorServices.professors.forEach((professor, index) => {
        if (professor.indexcard['_id'] === this._modalController.id) {
          this._professorServices.professors[index].indexcard['name'] = indexcard.name;
          this._professorServices.professors[index].indexcard['email'] = indexcard.email;
          this._professorServices.professors[index].indexcard['_id'] = indexcard._id;
          this.hideModal()
        }
      });
        break;
    }
  }


  hideModal() {
    this.form = undefined;
    this.creation = false;
    this.edition = false;
    this.role = "";
    this._modalController.hideModal();
  }
}
