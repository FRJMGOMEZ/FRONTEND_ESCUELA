import { Component, OnInit } from '@angular/core';
import { Alumni } from '../../../models/alumni.model';
import { AlumniServices } from '../../../providers/alumni.service';
import { UserServices } from '../../../providers/user.service';
import { SubjectServices } from '../../../providers/subject.service';
import { SubjectModalController } from '../../../modals/subject-modal/subjectModalController';
import { IndexCardModalController } from 'src/app/modals/index-card-modal/indexCardModalController';

@Component({
  selector: "app-alumni",
  templateUrl: "./alumni.component.html",
  styles: []
})
export class AlumniComponent implements OnInit {
  alumnis: Alumni[];
  token: string;
  from: number = 0;

  constructor(
    private _userServices: UserServices,
    private _alumniServices: AlumniServices,
    private _subjectServices: SubjectServices,
    private _subjectModalController: SubjectModalController,
    private _indexCardModalController: IndexCardModalController
  ) {
    this.token = this._userServices.token;

    this.getAlumnis();
  }

  ngOnInit() {
    this._subjectModalController.notification.subscribe(res => {
      if (!res) {
        this.getAlumnis();
      }
    });

    this._indexCardModalController.notification.subscribe(res => {
      if (!res) {
        this.getAlumnis();
      }
    });
  }

  getAlumnis() {
    this._alumniServices.getAlumnis(this.token).subscribe(alumnis => {
      this.alumnis = alumnis;
    });
  }

  searchAlumnis(input: string) {
    this._alumniServices
      .searchAlumnis(input, this.from, this.token)
      .subscribe(alumnis => {
        this.alumnis = alumnis;
      });
  }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number;
    }
  }

  deleteAlumni(id: string) {
    this._alumniServices.deleteAlumni(id, this.token).subscribe(() => {
      this.getAlumnis();
    });
  }

  openSubjectsModal(alumni: Alumni) {    

    this._subjectModalController.notification.emit({subjects:alumni.materias});

    this._subjectModalController.showModal("alumni", alumni._id);
  }

  deleteSubject(alumniId: string, subjectId: string) {
    this._subjectServices
      .addOrDeleteAlumni(subjectId, alumniId, this.token)
      .subscribe(() => {
        this.getAlumnis();
      });
  }

  openIndexCardModal(id?: string) {
    this._indexCardModalController.showModal('alumni');

    this._indexCardModalController.notification.emit(id);
  }
}
