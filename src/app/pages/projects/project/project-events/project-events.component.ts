import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../../../../providers/calendar.service';
import { EventModel } from '../../../../models/event.model';
import * as _ from 'underscore';
import { ProjectServices } from '../../../../providers/project.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-project-events",
  templateUrl: "./project-events.component.html",
  styleUrls: ["./project-events.component.scss"]
})
export class ProjectEventsComponent implements OnInit {
  
  events: EventModel[] = []
  @Input() projectId: string

  constructor(private _calendarServices: CalendarService,
              public _projectServices:ProjectServices,
              private router:Router) {}
  ngOnInit() {
    this._calendarServices.getEventsInProject(this._projectServices.projectSelectedId).subscribe((events:EventModel[])=>{
     this.events = events
     this.events = _.sortBy(this.events,(event)=>{
       return event.startDate
     })
    });
  }

  toEvent(date:Date){
    date = new Date(date)
    if (date.getTime() < new Date().getTime()) {
      date = new Date()
    }
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 6, 0, 0, 0);
    this._calendarServices.getDayByDate(date.getTime()).subscribe((res) => {
      this._calendarServices.getWeekByDay(this._calendarServices.currentDay._id, new Date(this._calendarServices.currentDay.date).getDay()).subscribe(() => {
        this.router.navigate(['/calendar', this._calendarServices.currentWeek._id, this._calendarServices.currentDay._id]).then(() => {
        })
      })
    })
  }
}
