import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) { }


  GetChartInfo():Observable<any>{
     return this.http.get('http://localhost:3000/sales')
  }
}
