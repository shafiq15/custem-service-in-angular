import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor( private http:HttpClient) { }


  // top headline api url
  topheadlinesNews=' https://newsapi.org/v2/top-headlines?country=us&apiKey=32d97687138644508add3d10b1799ea4'

  tcHeadlines(): Observable<any>{
    return this.http.get(this.topheadlinesNews)
  }
}
