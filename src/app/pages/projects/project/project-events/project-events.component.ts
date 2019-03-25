import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../../../../providers/calendar.service';
import { EventModel } from '../../../../models/event.model';
import * as _ from 'underscore';
import { ProjectServices } from '../../../../providers/project.service';

@Component({
  selector: "app-project-events",
  templateUrl: "./project-events.component.html",
  styleUrls: ["./project-events.component.scss"]
})
export class ProjectEventsComponent implements OnInit {
  
  events: EventModel[] = []
  @Input() projectId: string

  constructor(private _calendarServices: CalendarService,
              public _projectServices:ProjectServices) {}
  ngOnInit() {
    this._calendarServices.getEventsInProject(this._projectServices.projectSelectedId).subscribe((events:EventModel[])=>{
     this.events = events
     this.events = _.sortBy(this.events,(event)=>{
       return event.startDate
     })
    });
  }
}
