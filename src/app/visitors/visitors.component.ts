import { Component, OnInit } from '@angular/core';
import { VisitorsService } from '../providers/visitors.service';
import { AppVisitor } from '../models/visitor.model';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent implements OnInit {

  public visitors:AppVisitor[]=[];

  constructor(private _visitorsServices:VisitorsService) { }

  ngOnInit() {
    this._visitorsServices.getVisitors().subscribe((visitors:AppVisitor[])=>{
          this.visitors = visitors;
    })
  }

  deleteVisitor(id:string){
    this._visitorsServices.deleteVisitor(id).subscribe((visitor:AppVisitor)=>{
      this.visitors = this.visitors.filter((eachVisitor:AppVisitor)=>{return eachVisitor != visitor})
    })
  }

}
