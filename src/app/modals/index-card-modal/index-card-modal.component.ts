import { Component, OnInit } from '@angular/core';
import { indexcardModalController } from './indexcardModalController';
import { indexcardServices } from '../../providers/indexcard.service';
import { Indexcard, IndexcardOrder } from '../../models/indexcard.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumniServices } from 'src/app/providers/alumni.service';
import { Alumni } from '../../models/alumni.model';
import { Professor } from '../../models/professor.model';
import { ProfessorsServices } from '../../providers/professor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-index-card-modal",
  templateUrl: "./index-card-modal.component.html",
  styles: []
})
export class indexcardModalComponent implements OnInit {
  
  form: FormGroup;
  indexcardId: string;
  role: string;
  indexcardSubscription: Subscription = null;

  creation: boolean = false;
  edition: boolean = false;

  constructor(
    public _modalController: indexcardModalController,
    private _indexcardServices: indexcardServices,
    private _alumniServices: AlumniServices,
    private _professorServices: ProfessorsServices
  ) {}

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      surname: new FormControl(""),
      email: new FormControl("", Validators.email),
      mobile: new FormControl(null),
      home: new FormControl(null),
      address: new FormControl("")
    });

    this._modalController.notification.subscribe(res => {
      this.role = res;
        this.indexcardSubscription = this._indexcardServices.indexcards$.subscribe(
          (indexcardOrder: IndexcardOrder) => {
            if (indexcardOrder.order === "getById") {
              this.indexcardId = indexcardOrder.indexcard._id;
              this.form.setValue({
                name: indexcardOrder.indexcard.name,
                surname: indexcardOrder.indexcard.surname || "",
                email: indexcardOrder.indexcard.email || "",
                mobile: indexcardOrder.indexcard.mobile || "",
                home: indexcardOrder.indexcard.home || "",
                address: indexcardOrder.indexcard.address || ""
              });
            }else if (indexcardOrder.order === 'post'){
              this.indexcardId = indexcardOrder.indexcard._id;
                if (this.role === "PROFESSOR") {
                  let professor = new Professor(indexcardOrder.indexcard.name, this.indexcardId);
                  this._professorServices.postProfessor(professor).subscribe();
                  this.hideModal();
                } else if (this.role === "ALUMNI") {
                  let alumni = new Alumni(indexcardOrder.indexcard.name, this.indexcardId);
                  this._alumniServices.postAlumni(alumni).subscribe();
                  this.hideModal();
                }
            }
          }
        );
      if (this._modalController.id) {
        this.edition = true;
        this._indexcardServices.searchIndexcardById(this._modalController.id).subscribe();
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
      address: ""
    });
    this.creation = false;
    this.edition = false;
    this.indexcardId = "";
    this.role = "";
    this.indexcardSubscription.unsubscribe();
    this._modalController.hideModal();
  }
}
