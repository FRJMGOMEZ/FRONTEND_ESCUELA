import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../models/professor.model';
import { UserServices } from 'src/app/providers/user.service';
import { SubjectServices } from 'src/app/providers/subject.service';
import { SubjectModalController } from 'src/app/modals/subject-modal/subjectModalController';
import { IndexCardModalController } from 'src/app/modals/index-card-modal/indexCardModalController';
import { ProfessorsServices } from '../../../providers/professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styles: []
})
export class ProfessorComponent implements OnInit {
  
  professors: Professor[] = []
  token: string;
  from: number = 0;

  constructor(
    private _userServices: UserServices,
    private _professorServices: ProfessorsServices,
    private _subjectServices: SubjectServices,
    private _subjectModalController: SubjectModalController,
    private _indexCardModalController: IndexCardModalController
  ) {
    this.token = this._userServices.token;
  }

  ngOnInit() {

    this.getProfessors();

    this._subjectModalController.notification.subscribe(res => {
      if (!res) {
        this.getProfessors();
      }
    });

    this._indexCardModalController.notification.subscribe(res => {
      if (!res) {
        this.getProfessors();
      }
    });
  }

  getProfessors() {

    this._professorServices.getProfessors(this.token).subscribe(professors => {

      this.professors = professors;
    });
  }

  searchProfessors(input: string) {
    this._professorServices.searchProfessors(input,this.token)
      .subscribe(professors => {
        this.professors = professors;
      });
  }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number;
    }
  }

  deleteProfessor(id: string) {
    this._professorServices.deleteProfessor(id, this.token).subscribe(() => {
      this.getProfessors();
    });
  }

  openSubjectsModal(professor: Professor) {

    this._subjectModalController.notification.emit({ subjects: professor.materias });

    this._subjectModalController.showModal('professor',professor._id);
  }

  deleteSubject(professorId: string, subjectId: string) {
    
    this._subjectServices.addOrDeleteProfessor(subjectId, professorId, this.token).subscribe(() => {
        this.getProfessors();
      });
  }

  openIndexCardModal(id?:string) {

    this._indexCardModalController.showModal('professor');

    this._indexCardModalController.notification.emit(id);
  }

}
