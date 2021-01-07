import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { SubjectModalController } from '../../../modals/subject-modal/subject-modal-controller';
import { IndexcardModalController } from 'src/app/modals/index-card-modal/indexcard-modal-controller.service';
import { AlumniServices } from '../../../providers/alumni.service';
import { SubjectServices } from 'src/app/providers/subject.service';
import { SwalService } from '../../../providers/swal.service';

@Component({
  selector: "app-alumni",
  templateUrl: "./alumni.component.html",
  styleUrls: ["../adressBook.scss"]
})
export class AlumniComponent implements OnInit,OnDestroy {

  @ViewChild('input') input: ElementRef

  from: number = 0;

  getMode:boolean=true
  searchMode:boolean=false

  constructor(
    public _alumniServices:AlumniServices,
    public _subjectServices:SubjectServices,
    private _subjectModalController: SubjectModalController,
    private _indexcardModalController: IndexcardModalController,
    private _swalService:SwalService
  ) {
  }

   ngOnInit(){
     this._alumniServices.getAlumnis().subscribe()
   }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number;
    }
    if(this.searchMode){
      this._alumniServices.searchAlumnis(this.input.nativeElement.value,this.from).subscribe(()=>{})
    }else{
      this._alumniServices.getAlumnis(this.from).subscribe()
    }
  }

  postAlumni() {
    this._indexcardModalController.showModal();
      this._indexcardModalController.notification.emit('ALUMNI');
  }

  putAlumni(id: string) {
    this._indexcardModalController.showModal(id);
    this._indexcardModalController.notification.emit("ALUMNI");
  }

  addSubject(alumniId: string) {
    this._subjectModalController.showModal(alumniId);
    this._subjectModalController.notification.emit('ALUMNI');
  }


  deleteAlumni(id:string) {
      this._swalService.confirmDelete().then((response)=>{
        if(response){
          this._alumniServices.deleteAlumni(id).subscribe(()=>{
            this._alumniServices.getAlumnis(this.from).subscribe();
          })
        }
      })
  }

  ngOnDestroy(): void {
    this._alumniServices.alumnis = [];
  }
}
