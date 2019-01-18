import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, AfterContentInit, AfterViewInit, Pipe, AfterViewChecked, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { UserServices } from '../../../../providers/user.service';
import { EventModalController } from '../../../../modals/events-modal/eventsModal.controller';
import { DayComponent } from '../day.component';


@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit,AfterViewInit{
  token: string;

  @Input() facilitie: any;
  @Input() position: number = 0
  @Input() hour:any

  width:number
  
  ourEvents: any = {
    "0": undefined,
    "0.25": undefined,
    "0.50": undefined,
    "0.75": undefined
  };

  @ViewChild("eventCard") eventCard: ElementRef;
  child1 = this.renderer.createElement("a");
  newDiv = this.renderer.createElement('div')
  newDiv1 = this.renderer.createElement('div')
  newDiv2 = this.renderer.createElement('div')
  newDiv3 = this.renderer.createElement('div')

  constructor(
    private _userServices: UserServices,
    private renderer: Renderer2,
    private _modalEventController: EventModalController,
    private dayComponent:DayComponent
  ) {

    this.token = this._userServices.token;
  }
  ngOnInit() {
    const plus = document.createTextNode("+");
    this.child1.appendChild(plus);
    this.child1.setAttribute("id", "#child");
    this.renderer.setStyle(this.child1, "cursor", "pointer");

  }

  ngAfterViewInit(): void {
    this.render()
   
  }
  
  async render() {

    let spaceMustBe = 720 - (this.position) * 60; 
    for (let event of this.hour) {
      if (event.instalacion === this.facilitie._id) {
    
        if (event.posicion === this.position) {
          this.ourEvents["0"] = event;
        }
        if (event.posicion === this.position + 0.25) {
          this.ourEvents["0.25"] = event;
        }
        if (event.posicion === this.position + 0.5) {
          this.ourEvents["0.50"] = event;
        }
        if (event.posicion === this.position + 0.75) {
          this.ourEvents["0.75"] = event;
        }
      }
    }
    if (
      this.ourEvents["0"] === undefined &&
      this.ourEvents["0.25"] === undefined &&
      this.ourEvents["0.50"] === undefined &&
      this.ourEvents["0.75"] === undefined
    ) {

      if (Number(this.facilitie.space) === spaceMustBe) {
        
        this.renderer.appendChild(this.eventCard.nativeElement, this.child1);
        this.renderer.listen(this.eventCard.nativeElement, "click", () => {
          this.createEvent(this.position);
        });
        this.renderer.setStyle(
          this.eventCard.nativeElement,
          "height",
          `${60}px`
        );
        this.renderer.setStyle(
          this.eventCard.nativeElement,
          "background-color",
          "#c4afa1"
        );
        this.facilitie.space -= 60;
        return
      } else {

        setTimeout(() => {

          if (spaceMustBe - this.facilitie.space >= 60) {
            this.renderer.setStyle(this.eventCard.nativeElement, "height", "0");
            this.renderer.setStyle(this.eventCard.nativeElement, "width", "0");     
          } else {
            this.renderer.setStyle(this.eventCard.nativeElement, "height", `${60 - (spaceMustBe - this.facilitie.space)}px`);
            this.position = this.position + (1 - ((this.facilitie.space + 60 - spaceMustBe) / 60));
            this.facilitie.space -= 60 - (spaceMustBe-this.facilitie.space)
                              
            this.renderer.appendChild(this.eventCard.nativeElement, this.child1);
            this.renderer.listen(this.eventCard.nativeElement, "click", () => {
              this.createEvent(this.position);
            });
            this.renderer.setStyle(this.eventCard.nativeElement, "background-color", "#c4afa1");
                      
          }       
        })       
      } return
    } else {
      if (this.ourEvents["0"] != undefined) {

           await this.placeEvent('0', this.facilitie.space);
           this.facilitie.space-= 60*this.ourEvents['0'].duracion;
           
           let res = await this.checkSpace('0')             
           let height = res['height'];
           this.position += res['position'];
           this.facilitie.space -= height;
          
           await this.setSpace('newDiv1',height,this.position)
        }
       else {

        let res = await this.checkSpace(null,spaceMustBe)

        if(res){
          let height = res['height'];
          this.position += res['position'];
          this.facilitie.space -= height
          await this.setSpace('newDiv', height,this.position)
        }
          }
                   
      if (this.ourEvents["0.25"] != undefined) {
        await this.placeEvent('0.25', this.facilitie.space);

        this.facilitie.space -= 60 * this.ourEvents['0.25'].duracion;
        let res = await this.checkSpace('0.25');
         if(res){ 
           let height = res['height'];
           this.position += res['position'];
           this.facilitie.space -= height;
           this.setSpace("newDiv2", height,this.position);
         }        
      }

      if (this.ourEvents["0.50"] != undefined) {
        console.log(2)
        await this.placeEvent('0.50', this.facilitie.space);
        this.facilitie.space -= 60 * this.ourEvents['0.50'].duracion;

        let res = await this.checkSpace("0.50");
        if(res){
          let height = res['height'];
          this.position += res['position'];

          console.log(res['position'])
          this.facilitie.space -= height;
         await  this.setSpace('newDiv3', height,this.position)
        }
      }

      if(this.ourEvents['0.75']!=undefined){

        await this.placeEvent('0.75', this.facilitie.space);
        this.facilitie.space -= 60 * this.ourEvents['0.75'].duracion; 
      
      }

     }
  }

 placeEvent(position:string,space:string) {

    return new Promise((resolve,reject)=>{

      let card;
      switch (position) {
        case '0': card = this.newDiv;
          break;
        case '0.25': card = this.newDiv1;
          break;
        case '0.50': card = this.newDiv2;
          break;
        case '0.75': card = this.newDiv3;
        break;
      }

      let parent = this.renderer.parentNode(this.eventCard.nativeElement);
      let parent2 = this.renderer.parentNode(parent); 

      card = this.renderer.createElement('div')
      this.renderer.addClass(card,'card');

      let cardBody = this.renderer.createElement('div');
      this.renderer.addClass(cardBody,'card-body')

      this.renderer.appendChild(card,cardBody)

      //this.renderer.setStyle(cardBody, "width", `${this.width}px`);
      this.renderer.setStyle(cardBody, "background-color", "blue");

      const child = document.createElement(`a`);
      const name3 = document.createTextNode(`${this.ourEvents[position].nombre}`);
      child.append(name3);
      this.renderer.appendChild(cardBody, child);
      this.renderer.setStyle(
        cardBody,
        "height",
        `${60 * this.ourEvents[position].duracion}px`
      );
     
      switch (position) {
        case '0':
          this.renderer.insertBefore(parent2, card, parent)
          break;
        case "0.25":
          this.renderer.appendChild(parent2, card)
          break;
        case "0.50":
          this.renderer.appendChild(parent2, card)
          break;
        case "0.75":
          this.renderer.appendChild(parent2, card)
          break;
      }
      
      resolve({space});
    })
   }

 checkSpace(reference?:string,spaceMustBe?:number){
  return new Promise((resolve,reject)=>{
    
     if (reference) {

       if (reference === "0") {
         if (this.ourEvents["0.25"] === undefined && this.ourEvents["0"].duracion >= 0.25) {
        
           if (this.ourEvents["0.50"] === undefined) {
              
            if (this.ourEvents["0.75"] === undefined) {

              if(this.ourEvents['0'].duracion < 75){resolve({height:45,position:0.25})}
              else { resolve({ height: 45, position: 0.75 })}
              
             } else {

              if(this.ourEvents['0'].duracion < 50){resolve({height:15,position:0.25})}
              else { resolve({ height: 30, position: 0.50 })}
             }
           } else {
             resolve({height:15,position:0.25})
           }
         }
       }
       else if (reference === "0.25") {
         if (this.ourEvents["0.50"] === undefined && this.ourEvents["0.25"].duracion >= 0.25) {
           if (this.ourEvents["0.75"] === undefined) {
             if (this.ourEvents['0.25'].duracion < 0.50) { resolve({ height: 30, position: 0.50 })}
             else {
               resolve({ height: 15, position: 0.75 })}
           }
             else{resolve({height:15,position:0.50})}
         }
       }
       else if (reference === "0.50") {     
         if (this.ourEvents["0.75"] === undefined && this.ourEvents["0.50"].duracion === 0.25) {
           resolve({ height: 15, position: 0.75 })
         }
       }
     } else {
       setTimeout(() => {
         if (Number(this.facilitie.space) === spaceMustBe) {
           console.log("aquí");
           if (this.ourEvents["0.25"] === undefined) {
             if (this.ourEvents["0.50"] === undefined) {
               resolve({ height: 45, position: 0 });
             } else {
               resolve({ height: 30, position: 0 });
             }
           } else {
             resolve({ height: 15, position: 0 });
           }
         } else {
           let spaceLeft = spaceMustBe - this.facilitie.space;
           if (this.ourEvents["0.25"] === undefined) {
             if (this.ourEvents["0.50"] === undefined && spaceLeft >= 15) {
               if (this.ourEvents["0.75"] === undefined && spaceLeft >= 30) {
                 resolve({ height: 30, position: 0.75 });
               } else {
                 resolve({ height: 15, position: 0.5 });
               }
             } else {
               resolve({ height: 0, position: 0.25 });
             }
           } else {
             resolve();
           }
         }
       });
     }
       
  }) }

  setSpace(div:string,height?:number,position?:number){
            
     let division;
     switch (div) {
       case 'newDiv': division = this.newDiv;
         break;
       case 'newDiv1': division = this.newDiv1;
         break;
       case 'newDiv2': division = this.newDiv2;
         break;
       case 'newDiv3': division = this.newDiv3;
         break;
     }

     let parent = this.renderer.parentNode(this.eventCard.nativeElement);
     let parent2 = this.renderer.parentNode(parent)
     this.renderer.addClass(division,'card')

     let cardBody = this.renderer.createElement('div');
     this.renderer.addClass(cardBody,'card-body');

     this.renderer.appendChild(division,cardBody)

    //this.renderer.setStyle(cardBody, "width", `${this.width}px`);
     this.renderer.setStyle(cardBody, 'height', `${height}px`)
     this.renderer.setStyle(cardBody, "background-color", "#c4afa1");
     const child = document.createElement(`a`);
     const name = document.createTextNode(`+`);
     child.append(name);
     this.renderer.appendChild(cardBody, child);
     this.renderer.listen(cardBody, "click", () => {
       this.createEvent(position);
     });
  

    if (div === 'newDiv') { this.renderer.insertBefore(parent2, division, parent);console.log('Aquí estamos')}
    if (div === 'newDiv1') { this.renderer.appendChild(parent2, division)}
    if (div === 'newDiv2') { this.renderer.appendChild(parent2, division)}
    if (div === 'newDiv3') { this.renderer.appendChild(parent2, division)}
   }

  createEvent(position) {
    console.log(position)

    this._modalEventController.notification.emit({position, facilitieId:this.facilitie._id })

    this._modalEventController.showModal()
  }  
}


