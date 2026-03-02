import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ihome } from '../../models/ihome';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
private base_url = 'http://localhost:3000/dashboard/home'
  constructor (private _httpClient:HttpClient){}

  getHome(){
   return this._httpClient.get<Ihome>(this.base_url)
  }
    updateHome(id: string, data: Ihome){
    return this._httpClient.put(`${this.base_url}/${id}`, data);  }
}
