import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ["./pages.component.css"]
})
export class PagesComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params)
    })
  }

}
