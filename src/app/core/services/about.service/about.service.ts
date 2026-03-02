import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iabout } from '../../models/iabout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private base_url = 'http://localhost:3000/dashboard/about'
  constructor (private _httpClient:HttpClient){};

  getAbout(){
   return this._httpClient.get<Iabout>(this.base_url);
  }
  updateAbout(id:string,data:FormData) :Observable<Iabout> {
return this._httpClient.put<Iabout>(`${this.base_url}/${id} `,data);
  }
  
};
