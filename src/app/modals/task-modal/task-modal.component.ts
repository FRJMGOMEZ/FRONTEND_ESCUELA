import { Component, OnInit } from '@angular/core';
import { TaskModalController } from './task.modalController';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectServices } from '../../providers/project.service';
import { Task } from 'src/app/models/task.model';
import { UserServices } from 'src/app/providers/user.service';
import { UserOrder } from '../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {
  
  form:FormGroup

  projectId:string
  participants:any[]=[]

  startDate:Date
  dateLimit:Date

  participantsSubscription:Subscription = null;
   
  constructor(public _modalController:TaskModalController,
            private _projectServices:ProjectServices,
            private _userServices:UserServices) { }

  ngOnInit() {
    this._modalController.notification.subscribe((res)=>{
      this.startDate = new Date();
      this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate(), 0, 1, 0, 0);
      this.participantsSubscription = this._projectServices.users$.subscribe((userOrder:UserOrder)=>{
            if(userOrder.order === 'getByProject'){
              this.participants.push(userOrder.user);
            }
        })
      this._projectServices.getParticipantsByProject(this._modalController.id).subscribe()
        this.form = new FormGroup({
          description: new FormControl('', Validators.required),
          user: new FormControl(undefined, Validators.required)
        }) 
      
    })
  }

  postTask(){
    if(this.form.valid){
      this.dateLimit = new Date(this.dateLimit.getFullYear(), this.dateLimit.getMonth(), this.dateLimit.getDate(), 0, 1, 0, 0);
      let task = new Task(this.form.value.description,this._userServices.userOnline._id,this.form.value.user,this.projectId,this.startDate,this.dateLimit);
      this._projectServices.postTasks(task).subscribe(()=>{
        this.hideModal()
      })
    }
  }

  hideModal(){
    this.participants = [];
    this.participantsSubscription.unsubscribe();
    this._modalController.hideModal()
  }

}
