import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ProjectServices } from './project.service';
import { map } from 'rxjs/operators';
import { TaskOrder, Task } from '../models/task.model';
import { UserServices } from './user.service';
import { URL_SERVICES } from '../config/config';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private socket: Socket, private _projectServices:ProjectServices, private _userServices:UserServices, private http:HttpClient) { }
  
  //////// TASKS CRUD LOGIC ////////
  getTasksByProject() {
    let url = `${URL_SERVICES}tasksByProject/${this._projectServices.projectSelectedId}`
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this._projectServices.groupTasks = _.sortBy(res.tasks, (task) => {
        return task.dateLimit
      })
    }))
  }

  getTasksByUser(input: string) {
    let url = `${URL_SERVICES}tasksByUser/${this._projectServices.projectSelectedId}/${input}`
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this._projectServices.groupTasks = _.sortBy(res.tasks, (task) => {
        return task.dateLimit
      })
    }))
  }

  postTask(task: Task) {
    let url = `${URL_SERVICES}task`
    return this.http.post(url, task, { headers: this._userServices.headers }).pipe(map((res: any) => {
      if (res.task.user._id === this._userServices.userOnline._id) {
        this.taskChecked(res.task._id).subscribe()
        res.task.checked = true;
        this._projectServices.myTasks.push(res.task)
        this._projectServices.myTasks = _.sortBy(this._projectServices.myTasks, (task) => {
          return task.dateLimit
        })
      } else {
        this._projectServices.groupTasks.push(res.task)
        this._projectServices.groupTasks = _.sortBy(this._projectServices.groupTasks, (task) => {
          return task.dateLimit
        })
      }
      let taskOrder = new TaskOrder(res.task, 'post')
      this.emitTask(taskOrder)
    }))
  }

  putTask(taskId: string, task: Task) {
    let url = `${URL_SERVICES}task/${taskId}`;
    return this.http.put(url, task, { headers: this._userServices.headers }).pipe(map((res: any) => {
      if (this._projectServices.myTasks.map((task) => { return task._id }).indexOf(res.task._id) >= 0) {
        this._projectServices.myTasks.forEach((task, index) => {
          if (task._id === res.task._id) {
            this._projectServices.myTasks[index] = res.task;
          }
        })
      } else {
        this._projectServices.groupTasks.forEach((task, index) => {
          if (task._id === res.task._id) {
            this._projectServices.groupTasks[index] = res.task;
          }
        })
      }
      let taskOrder = new TaskOrder(res.task, 'put')
      this.emitTask(taskOrder)
    }))
  }

  taskChecked(taskId: string) {
    let url = `${URL_SERVICES}checkTask/${taskId}`
    return this.http.put(url, {}, { headers: this._userServices.headers }).pipe(map(() => {
      setTimeout(() => {
        let taskOrder = new TaskOrder(this._projectServices.myTasks.filter((task) => { return task._id === taskId })[0], 'put')
        this.emitTask(taskOrder)
      })
    }))
  }

  taskDone(taskId: string) {
    let url = `${URL_SERVICES}taskDone/${taskId}`
    return this.http.put(url, {}, { headers: this._userServices.headers }).pipe(map((res: any) => {
      let taskOrder = new TaskOrder(res.task, 'put')
      this._projectServices.myTasks.forEach((task, index) => {
        if (task._id === taskId) {
          this._projectServices.myTasks[index] = res.task
        }
      })
      this.emitTask(taskOrder)
    }))
  }

  deleteTask(taskId: string) {
    let url = `${URL_SERVICES}task/${taskId}`
    return this.http.delete(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      let taskOrder = new TaskOrder(res.task, 'delete')
      this.emitTask(taskOrder)
    }))
  }

   ////// TASK SOCKET LOGIC ///////
  emitTask(taskOrder) {
    let payload = { taskOrder, room: this._projectServices.projectSelectedId }
    this.socket.emit('task', payload)
  }

  taskSocket() {
    return this.socket.fromEvent('task').pipe(map((taskOrder: TaskOrder) => {
      if (taskOrder && taskOrder.order === 'post') {
        if (taskOrder.task.user['_id'] === this._userServices.userOnline._id) {
          this.taskChecked(taskOrder.task._id).subscribe(() => {
            taskOrder.task.checked = true;
            this._projectServices.myTasks.push(taskOrder.task)
          })
        } else {
          this._projectServices.groupTasks.push(taskOrder.task)
        }
        this._projectServices.groupTasks = _.sortBy(this._projectServices.groupTasks, (task) => {
          return task.dateLimit
        })
        this._projectServices.myTasks = _.sortBy(this._projectServices.myTasks, (task) => {
          return task.dateLimit
        })
      } else if (taskOrder.order === 'put') {
        if (taskOrder.task.user['_id'] === this._userServices.userOnline._id) {
          this._projectServices.myTasks.forEach((task, index) => {
            if (task._id === taskOrder.task._id) {
              this._projectServices.myTasks[index] = taskOrder.task;
            }
          })
        } else {
          this._projectServices.groupTasks.forEach((task, index) => {
            if (task._id === taskOrder.task._id) {
              this._projectServices.groupTasks[index] = taskOrder.task;
            }
          })
        }
      } else if (taskOrder.order === 'delete') {
        if (taskOrder.task.user['_id'] === this._userServices.userOnline._id) {
          this._projectServices.myTasks = this._projectServices.myTasks.filter((task) => { return task._id != taskOrder.task._id })
        } else {
          this._projectServices.groupTasks = this._projectServices.groupTasks.filter((task) => { return task._id != taskOrder.task._id })
        }
      }

      if (taskOrder.task.user['_id'] === this._userServices.userOnline._id) {
        this._projectServices.myTasks = _.sortBy(this._projectServices.myTasks, (task) => {
          return task.dateLimit
        })
      } else {
        this._projectServices.groupTasks = _.sortBy(this._projectServices.groupTasks, (task) => {
          return task.dateLimit
        })
      }
    }))
  }
}
