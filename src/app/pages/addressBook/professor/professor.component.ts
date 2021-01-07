import { Component,ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { SubjectModalController } from 'src/app/modals/subject-modal/subjectModalController';
import { IndexcardModalController } from 'src/app/modals/index-card-modal/indexcard-modal-controller';
import { ProfessorsServices } from '../../../providers/professor.service';
import { UserServices } from '../../../providers/user.service';
import { SubjectServices } from '../../../providers/subject.service';
import { SwalService } from '../../../providers/swal.service';

@Component({
  selector: "app-professor",
  templateUrl: "./professor.component.html",
  styleUrls: ["../adressBook.scss"]
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
    private _indexcardModalController: IndexcardModalController,
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
    this._indexcardModalController.showModal();
    this._indexcardModalController.notification.emit("PROFESSOR");
  }

  putProfessor(id: string) {
    this._indexcardModalController.showModal(id);
    this._indexcardModalController.notification.emit("PROFESSOR");
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
