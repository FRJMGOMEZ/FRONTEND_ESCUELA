import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Alumni, AlumniOrder } from '../../../models/alumni.model';
import { SubjectModalController } from '../../../modals/subject-modal/subjectModalController';
import { IndexCardModalController } from 'src/app/modals/index-card-modal/indexCardModalController';
import { Subscription } from 'rxjs';
import { AlumniServices } from '../../../providers/alumni.service';
import { SubjectServices } from 'src/app/providers/subject.service';
import { SwalService } from '../../../providers/swal.service';

@Component({
  selector: "app-alumni",
  templateUrl: "./alumni.component.html",styles: ['table { table-layout: fixed; }','div.scrollable {width: 100%;height: 100%;margin: 0;padding: 0;overflow: auto;}']
})
export class AlumniComponent implements OnInit,OnDestroy {

  alumnis: Alumni[]=[]
  alumnisSubscription: Subscription = null;
  @ViewChild('input') input: ElementRef

  from: number = 0;

  getMode:boolean=true
  searchMode:boolean=false

  constructor(
    public _alumniServices:AlumniServices,
    public _subjectServices:SubjectServices,
    private _subjectModalController: SubjectModalController,
    private _indexcardModalController: IndexCardModalController,
    private _swalService:SwalService
  ) {
  }

   ngOnInit(){

     this.alumnisSubscription = this._alumniServices.alumnis$.subscribe((alumniOrder: AlumniOrder) => {
       if (alumniOrder.order === 'post') {
         if (this.alumnis.length < 5) { this.alumnis.push(alumniOrder.alumni) }
       }
       if(alumniOrder.order === 'get'){
           this.alumnis.push(alumniOrder.alumni);
       }
       else if (alumniOrder.order === 'delete') {
         this.alumnis = this.alumnis.filter((alumni) => { return alumni._id != alumniOrder.alumni._id })
       }
       else if (alumniOrder.order === 'put') {
         this.alumnis.forEach((alumni, index) => {
           if (alumni.indexcard === alumniOrder.alumni.indexcard) {
             if(alumniOrder.alumni.subjects.length === alumni.subjects.length){
               this.alumnis[index].name = alumniOrder.alumni.name;
             }else{this.alumnis[index].subjects=(alumniOrder.alumni.subjects)}
           }
         })
       }
     })
     this._alumniServices.getAlumnis().subscribe()
   }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number;
    }
    if(this.searchMode){
      this.alumnis = [];
      this._alumniServices.searchAlumnis(this.input.nativeElement.value,this.from).subscribe(()=>{})
    }else{
      this.alumnis=[];
      this._alumniServices.getAlumnis(this.from).subscribe()
    }
  }

  openSubjectsModal(alumniId: string) {
    this._subjectModalController.showModal(alumniId);
    this._subjectModalController.notification.emit('ALUMNI');console.log(alumniId)
  }

  openIndexcardModal(id?: string) {
    this._indexcardModalController.showModal(id);
      this._indexcardModalController.notification.emit('ALUMNI');
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
    this.alumnisSubscription.unsubscribe()
  }
}
