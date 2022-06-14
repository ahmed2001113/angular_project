import { Component, OnInit } from '@angular/core';
import {NewapiService}from '../newapi.service'
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  newapi:any;
  constructor(public cobynewapi:NewapiService){
    cobynewapi.getnewapi('business').subscribe(newsapidata=>this.newapi=newsapidata.articles )}
  
  ngOnInit(): void {
  }
  notfoundimg="src/assets/img/not-found.jpg";
}
