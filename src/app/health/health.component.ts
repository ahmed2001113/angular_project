import { Component, OnInit } from '@angular/core';
import {NewapiService}from '../newapi.service'
@Component({
  selector: 'app-business',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  newapi:any;
  constructor(public cobynewapi:NewapiService){
    cobynewapi.getnewapi('health').subscribe(newsapidata=>this.newapi=newsapidata.articles )}
  
  ngOnInit(): void {
  }

}