import { Component, OnInit} from '@angular/core';
import { ProjectServices } from '../../../../providers/project.service';
import { TaskModalController } from '../../../../modals/task-modal/task-modal-controller.service';
import { UserServices } from '../../../../providers/user.service';
import { SwalService } from '../../../../providers/swal.service';
import * as _ from 'underscore';
import { Task } from 'src/app/models/task.model';
import { TasksService } from '../../../../providers/tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
 

  constructor(public _projectServices:ProjectServices,
              public _taskModalController:TaskModalController,
              public _userServices:UserServices,
              public _swalService:SwalService,
              public _taskServices:TasksService) { }

  ngOnInit() {
    this._projectServices.myTasks.forEach((task:any,index)=>{
        if(!task.checked && task.user._id === this._userServices.userOnline._id){
          this._taskServices.taskChecked(task._id).subscribe(()=>{
           this._projectServices.myTasks[index].checked = true;
          })

        }
    })
  }

  postTask(){
    this._taskModalController.showModal()
    this._taskModalController.notification.emit()
  }

  deleteTask(id:string){
      this._swalService.confirmDelete().then((res:any)=>{
        if(res){
          this._taskServices.deleteTask(id).subscribe(() => {
            this._projectServices.myTasks = this._projectServices.myTasks.filter((task) => { return task._id != id })
            this._projectServices.groupTasks = this._projectServices.groupTasks.filter((task) => { return task._id != id })
          })
        }
      })
  }
  
  putTask(id:string){
    this._taskModalController.showModal(id)
    this._taskModalController.notification.emit()
  }

  taskDone(taskId: string) {
    this._taskServices.taskDone(taskId).subscribe()
  }

  taskColor(task:Task){
    if(task.ok){
      return 'green'
    }else{
      return 'red'
    }
  }

  checkTime(date:Date){
    let today = new Date();
    today = new Date(today.getFullYear(),today.getMonth(),today.getDate(),6,0,0,0);
    if(new Date(date).getTime()<today.getTime()){
      return '#E88C5A'  
    }
  }


  
}
