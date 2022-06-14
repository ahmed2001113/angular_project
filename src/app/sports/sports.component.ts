import { Component, OnInit } from '@angular/core';
import {NewapiService}from '../newapi.service'
@Component({
  selector: 'app-business',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  newapi:any;
  constructor(public cobynewapi:NewapiService){
    cobynewapi.getnewapi('sports').subscribe(newsapidata=>this.newapi=newsapidata.articles )}
  
  ngOnInit(): void {
  }

}