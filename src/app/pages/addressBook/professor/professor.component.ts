import { Component,ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { SubjectModalController } from 'src/app/modals/subject-modal/subjectModalController';
import { IndexCardModalController } from 'src/app/modals/index-card-modal/indexCardModalController';
import { ProfessorsServices } from '../../../providers/professor.service';
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

  @ViewChild("input") input: ElementRef;

  from: number = 0;

  searchMode: boolean = false;
  getMode: boolean = true;

  constructor(
    public _userServices: UserServices,
    public _professorServices: ProfessorsServices,
    public _subjectServices: SubjectServices,
    private _subjectModalController: SubjectModalController,
    private _indexCardModalController: IndexCardModalController,
    private _swalService: SwalService
  ) {}

  ngOnInit() {
    this._professorServices.getProfessors().subscribe();
  }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number;
    }
    if (this.searchMode) {
      this._professorServices
        .searchProfessors(this.input.nativeElement.value, this.from)
        .subscribe();
    } else {
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

  ngOnDestroy(): void {
    this._professorServices.professors = []
  }
}
