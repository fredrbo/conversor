import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private httpClient: HttpClient) { }

  getConvert (to: string, from: string): Observable<any>{
    return this.httpClient.get(`${API_PATH}/${to}-${from}`);
 }

}
