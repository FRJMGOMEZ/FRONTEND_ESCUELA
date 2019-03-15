import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectServices } from '../../../../providers/project.service';
import { TaskOrder, Task } from '../../../../models/task.model';
import { TaskModalController } from '../../../../modals/task-modal/task.modalController';
import { UserServices } from '../../../../providers/user.service';
import { Subscription } from 'rxjs';
import { MainProjectsComponent } from '../../mainProjects.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {

  groupTasks:Task[] = []
  myTasks:Task[]=[]

  taskSubscription:Subscription = null;

  constructor(private _projectServices:ProjectServices,
              public _taskModalController:TaskModalController,
              private _userServices:UserServices,
              private mainProjectsComponent:MainProjectsComponent) { }

  ngOnInit() {   

    this.taskSubscription = this._projectServices.tasks$.subscribe((taskOrder: TaskOrder) => {
      if (taskOrder.order === 'get' || taskOrder.order === 'push') {
        if (taskOrder.task.user['_id'] === this._userServices.userOnline._id) {
          if (!taskOrder.task.checked) {
            taskOrder.task.checked = true;
            this.myTasks.push(taskOrder.task);
            this._projectServices.taskChecked(taskOrder.task._id).subscribe()
          }else{
            this.myTasks.push(taskOrder.task)
          }
        }else{
          this.groupTasks.push(taskOrder.task)
        }
      }else if(taskOrder.order === 'done') {
        this.myTasks.forEach((task, index) => {
          if (task._id === taskOrder.task._id) {
            this.myTasks[index] = taskOrder.task;
          }
        })
      }
    })
    this._projectServices.getTasks(this.mainProjectsComponent.projectSelectedId).subscribe()
  }

  postTask(){
    this._taskModalController.showModal(this.mainProjectsComponent.projectSelectedId)
    this._taskModalController.notification.emit()
  }

  done(taskId:string){
   this._projectServices.taskDone(taskId).subscribe()
  }

  ngOnDestroy(){
    this.taskSubscription.unsubscribe()
  }
}
