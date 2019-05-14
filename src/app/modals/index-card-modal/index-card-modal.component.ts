import { Component, OnInit } from '@angular/core';
import { IndexcardModalController } from './indexcardModalController';
import { IndexcardServices } from '../../providers/indexcard.service';
import { Indexcard, IndexcardOrder } from '../../models/indexcard.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumniServices } from 'src/app/providers/alumni.service';
import { Alumni } from '../../models/alumni.model';
import { Professor } from '../../models/professor.model';
import { ProfessorsServices } from '../../providers/professor.service';
import { Subscription } from 'rxjs';
import { Artist } from '../../models/artist.model';
import { UserServices } from 'src/app/providers/user.service';
import { ManagerService } from '../../providers/manager.service';

@Component({
  selector: "app-index-card-modal",
  templateUrl: "./index-card-modal.component.html",
  styles: []
})
export class IndexcardModalComponent implements OnInit {
  
  form: FormGroup;
  indexcardId: string;
  role: string;
  indexcardSubscription: Subscription = null;

  creation: boolean = false;
  edition: boolean = false;

  constructor(
    public _modalController: IndexcardModalController,
    private _indexcardServices: IndexcardServices,
    private _alumniServices: AlumniServices,
    private _professorServices: ProfessorsServices,
    public _userServices:UserServices,
    private _managerServices:ManagerService
  ) {}

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      surname: new FormControl(""),
      email: new FormControl("", Validators.email),
      mobile: new FormControl(null),
      home: new FormControl(null),
      address: new FormControl(""),
      user: new FormControl('')
    });

    this._modalController.notification.subscribe(res => {
      this._userServices.getUsers(0,100).subscribe()
      this.role = res;
        this.indexcardSubscription = this._indexcardServices.indexcards$.subscribe(
         async (indexcardOrder: IndexcardOrder) => {
            if (indexcardOrder.order === "getById") {
              this.indexcardId = indexcardOrder.indexcard._id;
              this.form.setValue({
                name: indexcardOrder.indexcard.name,
                surname: indexcardOrder.indexcard.surname || "",
                email: indexcardOrder.indexcard.email || "",
                mobile: indexcardOrder.indexcard.mobile || "",
                home: indexcardOrder.indexcard.home || "",
                address: indexcardOrder.indexcard.address || "",
                user:this.form.value.user || ""
              });
            }else if (indexcardOrder.order === 'post'){
              this.indexcardId = indexcardOrder.indexcard._id;
                if (this.role === "PROFESSOR") {
                  let professor = new Professor(indexcardOrder.indexcard.name, this.indexcardId);
                  await this._professorServices.postProfessor(professor).subscribe();
                  this.hideModal();
                } else if (this.role === "ALUMNI") {
                  let alumni = new Alumni(indexcardOrder.indexcard.name, this.indexcardId);
                  await this._alumniServices.postAlumni(alumni).subscribe();
                  this.hideModal();
                } else if(this.role === 'ARTIST') {
                  let artist = await new Artist(indexcardOrder.indexcard.name,indexcardOrder.indexcard._id,[],[],this.form.value.user||undefined);
                  await this._managerServices.postArtist(artist).subscribe()
                  this.hideModal()
                  this._managerServices.getOrSearch('artists')
                }
            }
          }
        );
      if (this._modalController.id) {
        this.edition = true;
        this._indexcardServices.searchindexcardById(this._modalController.id).subscribe();
      } else {
        this.creation = true;
      }
    });
  }

  putIndexcard() {
    if (this.form.valid) {
      let value = this.form.value;
      let indexcard = new Indexcard(
        this.role,
        value.name,
        value.surname,
        value.email,
        value.mobile,
        value.home,
        value.address
      );
      this._indexcardServices.putIndexcard(indexcard, this.indexcardId).subscribe(()=>{
        this.hideModal()
      }) 
    }
  }

  postIndexcard() {
    if (this.form.valid) {
      let value = this.form.value;
      let indexcard = new Indexcard(
        this.role,
        value.name,
        value.surname,
        value.email,
        value.mobile,
        value.home,
        value.address
      );
      this._indexcardServices.postIndexcard(indexcard).subscribe()
      ;
    }
  }

  hideModal() {
    this.form.setValue({
      name: "",
      surname: "",
      email: "",
      mobile: null,
      home: null,
      address: "",
      user:''
    });
    this.creation = false;
    this.edition = false;
    this.indexcardId = "";
    this.role = "";
    this.indexcardSubscription.unsubscribe();
    this._userServices.users = [];
    this._modalController.hideModal();
  }
}
