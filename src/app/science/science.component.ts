import { Component, OnInit } from '@angular/core';
import {NewapiService}from '../newapi.service'
@Component({
  selector: 'app-business',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  newapi:any;
  constructor(public cobynewapi:NewapiService){
    cobynewapi.getnewapi('science').subscribe(newsapidata=>this.newapi=newsapidata.articles )}
  
  ngOnInit(): void {
  }

}