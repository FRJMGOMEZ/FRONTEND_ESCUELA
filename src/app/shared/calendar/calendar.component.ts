import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  frame:Date[]
  firstDate: Date
  month:string

  @Input() modeNoBack:boolean=true

  dateSelected:Date

  @Output() date = new EventEmitter<Date>()

  constructor() { }

  ngOnInit() {
    this.firstDate = new Date();
    this.firstDate.setDate((this.firstDate.getDate() - this.firstDate.getDate()) + 1)
    this.getStructure()
    this.getMonth(new Date(this.firstDate))
  }

  valueChange(date:Date){
    this.dateSelected = date;
    this.date.emit(date)
  }

  linkStyle(position:number,attribute:string){
    if(attribute === 'bg'){
      if(this.frame[position]===this.dateSelected){
        return "#ffb380";
      }else{
        return
      }
    }
    if(attribute === 'opacity'){
      if(this.frame[position] < new Date()&& this.modeNoBack){
        return 0.5
      }
    }else{
      return
    }
  }

  async getStructure() {
    this.frame = []
    for (let i = 1; i <= this.firstDate.getDay(); i++) {
      let dayBefore = new Date(this.firstDate);
      dayBefore.setDate(dayBefore.getDate() - (this.firstDate.getDay() - i))
      this.frame.push(dayBefore)
    }
    let referenceDay = this.firstDate;
    for (let i = this.firstDate.getDay(); i <= 34; i++) {
      referenceDay = new Date(referenceDay.getFullYear(), referenceDay.getMonth(), referenceDay.getDate() + 1, referenceDay.getHours(), referenceDay.getMinutes(), referenceDay.getMilliseconds())
      this.frame.push(referenceDay)
    }
  }

  switchMonth(month: number) {
    let newMonth = this.firstDate.getMonth() + month;
    let year = this.firstDate.getFullYear();
    let date = this.firstDate.getDate();
    this.firstDate = new Date(year, newMonth, date)
    this.getMonth(this.firstDate)
    this.getStructure()
  }

  switchYear(year: number) {
    let month = this.firstDate.getMonth();
    let newYear = this.firstDate.getFullYear() + year;
    let date = this.firstDate.getDate();
    this.firstDate = new Date(newYear, month, date)
    this.getMonth(this.firstDate);
    this.getStructure()
  }

  getMonth(date: Date) {
    switch (date.getMonth()) {
      case 0: this.month = 'Enero';
        break;
      case 1: this.month = 'Febrero';
        break;
      case 2: this.month = 'Marzo';
        break;
      case 3: this.month = 'Abril';
        break;
      case 4: this.month = 'Mayo';
        break;
      case 5: this.month = 'Junio';
        break;
      case 6: this.month = 'Julio';
        break;
      case 7: this.month = 'Agosto';
        break;
      case 8: this.month = 'Septiembre';
        break;
      case 9: this.month = 'Octubre';
        break;
      case 10: this.month = 'Noviembre';
        break;
      case 11: this.month = 'Diciembre'
    }
  }

}
