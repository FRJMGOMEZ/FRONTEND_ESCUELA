import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Professor } from '../../../models/professor.model';
import { SubjectModalController } from 'src/app/modals/subject-modal/subjectModalController';
import { IndexCardModalController } from 'src/app/modals/index-card-modal/indexCardModalController';
import { AddressBookComponent } from '../addressBook.component';
import { ProfessorsServices } from '../../../providers/professor.service';
import { Subscription } from 'rxjs';
import { UserServices } from '../../../providers/user.service';
import { SubjectServices } from '../../../providers/subject.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styles: []
})
export class ProfessorComponent implements OnInit, OnDestroy  {

  token:string
  
  professors: Professor[] = []

  @ViewChild('input') input: ElementRef
  
  from: number = 0;

  searchMode:boolean=false;
  getMode:boolean=true;

  professorsSubscription: Subscription = null;
  
  constructor(
    public _userServices:UserServices,
    public _professorServices:ProfessorsServices,
    public _subjectServices:SubjectServices,
    private _subjectModalController: SubjectModalController,
    private _indexCardModalController: IndexCardModalController
  ) {

    this.token = this._userServices.token;
  }

  ngOnInit(){
    this.professorsSubscription = this._professorServices.professors$.subscribe((professorOrder: any) => {
      if (professorOrder.order === 'post') {
        if (this.professors.length < 5) { this.professors.push(professorOrder.professor) }
      }
      if (professorOrder.order === 'get') {
        this.professors.push(professorOrder.professor);
      }
      else if (professorOrder.order === 'delete') {
        this.professors = this.professors.filter((professor) => { return professor._id != professorOrder.professor._id })
      }
      else if (professorOrder.order === 'update') {
        this.professors.forEach((professor, index) => {
          if (professor._id === professorOrder.professor._id) {
            this.professors[index] = professorOrder.professor
          }
        })
      }
    })
    this._professorServices.getProfessors().subscribe()
  }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number;
    }
    if (this.searchMode) {
      this.professors = [];
      this._professorServices.searchProfessors(this.input.nativeElement.value,this.token,this.from).subscribe()
    } else {
      this.professors = [];
      this._professorServices.getProfessors(this.token,this.from).subscribe()
    }
  }

  openSubjectsModal(professorId:string) {
    this._subjectModalController.showModal("PROFESSOR", professorId);
    this._subjectModalController.notification.emit({ message: 'addSubjects' });
  
  }
 

  openIndexCardModal(id?:string) {
    this._indexCardModalController.showModal('PROFESSOR');
    if (id) {
      this._indexCardModalController.notification.emit({ id: id });
    } else {
      this._indexCardModalController.notification.emit({ message: 'noId' });
    }
  }

  ngOnDestroy(): void {
    this.professorsSubscription.unsubscribe()
  }
}
