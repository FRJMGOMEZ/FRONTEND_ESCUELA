import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  @Input('paymentId') paymentId:string
  @Input('artistId') artistId: string


  constructor() { }

  ngOnInit() {
  }

}
