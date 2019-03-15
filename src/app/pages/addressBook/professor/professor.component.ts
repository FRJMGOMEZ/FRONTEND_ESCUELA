import { Component,ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Professor, ProfessorOrder } from '../../../models/professor.model';
import { SubjectModalController } from 'src/app/modals/subject-modal/subjectModalController';
import { IndexCardModalController } from 'src/app/modals/index-card-modal/indexCardModalController';
import { ProfessorsServices } from '../../../providers/professor.service';
import { Subscription } from 'rxjs';
import { UserServices } from '../../../providers/user.service';
import { SubjectServices } from '../../../providers/subject.service';
import { SwalService } from '../../../providers/swal.service';

@Component({
  selector: "app-professor",
  templateUrl: "./professor.component.html",
  styles: [
    "div.scrollable {width: 100%;height: 100%;margin: 0;padding: 0;overflow: auto;}"
  ]
})
export class ProfessorComponent implements OnInit, OnDestroy {
  
  professors: Professor[] = [];

  @ViewChild("input") input: ElementRef;

  from: number = 0;

  searchMode: boolean = false;
  getMode: boolean = true;

  professorsSubscription: Subscription = null;

  constructor(
    public _userServices: UserServices,
    public _professorServices: ProfessorsServices,
    public _subjectServices: SubjectServices,
    private _subjectModalController: SubjectModalController,
    private _indexCardModalController: IndexCardModalController,
    private _swalService: SwalService
  ) {}

  ngOnInit() {
    this.professorsSubscription = this._professorServices.professors$.subscribe(
      (professorOrder: ProfessorOrder) => {
        if (professorOrder.order === "post") {
          if (this.professors.length < 5) {
            this.professors.push(professorOrder.professor);
          }
        }else if (professorOrder.order === "get") {
          this.professors.push(professorOrder.professor);
        } else if (professorOrder.order === "delete") {
          this.professors = this.professors.filter(professor => {
            return professor._id != professorOrder.professor._id;
          });
        } else if (professorOrder.order === "put") {
          this.professors.forEach((professor, index) => {
            if (professor.indexcard === professorOrder.professor.indexcard) {
              if (professorOrder.professor.subjects.length === professor.subjects.length) {
                this.professors[index].name = professorOrder.professor.name;
              } else {
                this.professors[index].subjects = professorOrder.professor.subjects;
              }
            }
          });
        }
      }
    );
    this._professorServices.getProfessors().subscribe();
  }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number;
    }
    if (this.searchMode) {
      this.professors = [];
      this._professorServices
        .searchProfessors(this.input.nativeElement.value, this.from)
        .subscribe();
    } else {
      this.professors = [];
      this._professorServices.getProfessors(this.from).subscribe();
    }
  }

  postProfessor() {
    this._indexCardModalController.showModal();
    this._indexCardModalController.notification.emit("PROFESSOR");
  }

  putProfessor(id: string) {
    this._indexCardModalController.showModal(id);
    this._indexCardModalController.notification.emit("PROFESSOR");
  }

  deleteProfessor(id: string) {
    this._swalService.confirmDelete().then(res => {
      if (res) {
        this._professorServices.deleteProfessor(id).subscribe(()=>{
          this._professorServices.getProfessors(this.from).subscribe()
        });
      }
    });
  }

  addSubject(professorId: string) {
    this._subjectModalController.showModal(professorId);
    this._subjectModalController.notification.emit("PROFESSOR");
  }

  deleteSubject(subjectId: string, professorId: string) {
    this._subjectServices
      .addOrDeleteProfessor(subjectId, professorId)
      .subscribe(() => {
        this.professors.forEach((professor, index) => {
          let professorUpdated;
          if (professor._id === professorId) {
            professorUpdated = professor;
            let professorSubjectsIds = professorUpdated.subjects.map(
              (subject: any) => {
                return subject._id;
              }
            );
            if (professorSubjectsIds.indexOf(subjectId) < 0) {
              this.professors[index].subjects = this.professors[
                index
              ].subjects.filter((subject: any) => {
                return subject._id != subjectId;
              });
            }
          }
        });
      });
  }

  ngOnDestroy(): void {
    this.professorsSubscription.unsubscribe();
  }
}
