import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewapiService {

  constructor(public _HttpClient:HttpClient){}
  getnewapi(cat: string):Observable<any>
  {
    return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category="+cat+"&apiKey=59345ade235d4c9cb58151cb4f17a80a")
  } 
}
