import { Component, OnInit } from '@angular/core';
import { AssignationsModalController } from './assignationsModal.controller';
import { Assignation } from 'src/app/models/track.model';
import { ManagerService } from '../../providers/manager.service';

@Component({
  selector: 'app-assignations-modal',
  templateUrl: './assignations-modal.component.html',
  styleUrls: ['./assignations-modal.component.scss']
})
export class AssignationsModalComponent implements OnInit {

  assignations:Assignation[]=[];
  noAssignations:boolean = false;

  constructor(public _modalController:AssignationsModalController,
              public _managerServices:ManagerService) { }

  ngOnInit() {
    this._modalController.notification.subscribe(()=>{
      this._managerServices.searchAssignationsByArtist(this._modalController.id).subscribe((assignations: Assignation[]) => {
        if(assignations.length === 0){
          this.noAssignations = true;
        }else{
          this.assignations = assignations;
        }
      })
    })
  }

  hideModal(){
    this.assignations=[];
    this._modalController.hideModal()
    this.noAssignations = false;
  }

}
