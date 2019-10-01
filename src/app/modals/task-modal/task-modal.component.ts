import { Component, OnInit } from '@angular/core';
import { TaskModalController } from './task.modalController';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectServices } from '../../providers/project.service';
import { Task } from 'src/app/models/task.model';
import { UserServices } from 'src/app/providers/user.service';
import { TasksService } from '../../providers/tasks.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {
  
  form:FormGroup

  taskId:string
  taskUserId:string

  participants:any[]=[]

  startDate:Date
  dateLimit:Date
   
  constructor(public _modalController:TaskModalController,
            private _projectServices:ProjectServices,
            private _userServices:UserServices,
            public _taskServices:TasksService) { }

  ngOnInit() {
    this._modalController.notification.subscribe(()=>{
      this.participants = this._projectServices.participants;
      if(this._modalController.id){
        let task;
        if(this._projectServices.myTasks.map((task:any)=>{return task._id}).indexOf(this._modalController.id)>=0){
            task = this._projectServices.myTasks.filter((task)=>{return task._id === this._modalController.id})[0];
            this.taskId = task._id;
            this.startDate = task.date;
            this.taskUserId = task.user._id;
            this.participants = this.participants.filter((participant:any)=>{return participant._id != task.user._id})
        }else{
          task = this._projectServices.groupTasks.filter((task) => { return task._id === this._modalController.id })[0];
          this.taskId = task._id;
          this.startDate = task.date;
          this.taskUserId = task.user._id;
          this.participants = this.participants.filter((participant) => { return participant._id != task.user._id})
        }
        this.form = new FormGroup({
          description: new FormControl(task.description, Validators.required),
          user: new FormControl(task.user, Validators.required)
        })
      }else{
        this.startDate = new Date();
        this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate(), 6, 0, 0, 0);
        this.form = new FormGroup({
          description: new FormControl('', Validators.required),
          user: new FormControl(undefined, Validators.required)
        }) 
      }
    })
  }

  putTask(){
    if(this.form.valid){
      this.dateLimit = new Date(this.dateLimit.getFullYear(), this.dateLimit.getMonth(), this.dateLimit.getDate(), 6, 0, 0, 0);
      let task = new Task(this.form.value.description, this._userServices.userOnline._id,this.taskUserId , this._projectServices.projectSelectedId, this.startDate, this.dateLimit);
      this._taskServices.putTask(this.taskId,task).subscribe(()=>{
        this.hideModal()
      })
    }
  }

  postTask(){
    if(this.form.valid){
      this.dateLimit = new Date(this.dateLimit.getFullYear(), this.dateLimit.getMonth(), this.dateLimit.getDate(), 6, 0, 0, 0);
      let task = new Task(this.form.value.description,this._userServices.userOnline._id,this.form.value.user,this._projectServices.projectSelectedId,this.startDate,this.dateLimit);
      this._taskServices.postTask(task).subscribe(()=>{
        this.hideModal()
      })
    }
  }

  hideModal(){
    this.participants = [];
    this._modalController.hideModal();
    this.taskUserId = undefined;
    this.taskId=undefined;
  }

}
