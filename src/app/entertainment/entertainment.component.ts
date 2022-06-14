import { Component, OnInit } from '@angular/core';
import {NewapiService}from '../newapi.service'
@Component({
  selector: 'app-business',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  newapi:any;
  constructor(public cobynewapi:NewapiService){
    cobynewapi.getnewapi('health').subscribe(newsapidata=>this.newapi=newsapidata.articles )}
  
  ngOnInit(): void {
  }

}