import { Component, Input, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Alumni } from '../../../models/alumni.model';
import { SubjectModalController } from '../../../modals/subject-modal/subjectModalController';
import { IndexCardModalController } from 'src/app/modals/index-card-modal/indexCardModalController';
import { Subscription } from 'rxjs';
import { AlumniServices } from '../../../providers/alumni.service';
import { UserServices } from '../../../providers/user.service';
import { SubjectServices } from 'src/app/providers/subject.service';

@Component({
  selector: "app-alumni",
  templateUrl: "./alumni.component.html",
  styles: []
})
export class AlumniComponent implements OnInit,OnDestroy {

  token:string

  alumnis: Alumni[]=[]
  alumnisSubscription: Subscription = null;
  @ViewChild('input') input: ElementRef

  from: number = 0;

  getMode:boolean=true
  searchMode:boolean=false

  constructor(
    private _userServices:UserServices,
    public _alumniServices:AlumniServices,
    public _subjectServices:SubjectServices,
    private _subjectModalController: SubjectModalController,
    private _indexcardModalController: IndexCardModalController
  ) {
    this.token = this._userServices.token;
  }

   ngOnInit(){

     this.alumnisSubscription = this._alumniServices.alumnis$.subscribe((alumniOrder: any) => {
       if (alumniOrder.order === 'post') {
         if (this.alumnis.length < 5) { this.alumnis.push(alumniOrder.alumni) }
       }
       if(alumniOrder.order === 'get'){
           this.alumnis.push(alumniOrder.alumni);
       }
       else if (alumniOrder.order === 'delete') {
         this.alumnis = this.alumnis.filter((alumni) => { return alumni._id != alumniOrder.alumni._id })
       }
       else if (alumniOrder.order === 'update') {
         this.alumnis.forEach((alumni, index) => {
           if (alumni._id === alumniOrder.alumni._id) {
             this.alumnis[index] = alumniOrder.alumni
           }
         })
       }
     })
     this._alumniServices.getAlumnis(this.token).subscribe()
   }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number;
    }
    if(this.searchMode){
      this.alumnis = [];
      this._alumniServices.searchAlumnis(this.input.nativeElement.value,this.token,this.from).subscribe(()=>{})
    }else{
      this.alumnis=[];
      this._alumniServices.getAlumnis(this.token,this.from).subscribe()
    }
  }

  openSubjectsModal(alumniId: string) {
    this._subjectModalController.showModal("ALUMNI", alumniId);
    this._subjectModalController.notification.emit({message:'addSubjects'});
  }

  openIndexcardModal(id?: string) {
    this._indexcardModalController.showModal('ALUMNI');
    if(id){
      this._indexcardModalController.notification.emit({id:id});
    }else{
      this._indexcardModalController.notification.emit({message:'noId'});
    }
  }

  ngOnDestroy(): void {
    this.alumnisSubscription.unsubscribe()
  }
}
