import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icontact } from '../../models/icontact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private base_url = 'http://localhost:3000/dashboard/contact';
  constructor (private _httpClient:HttpClient){};

  getContact(){
  return  this._httpClient.get<any>(this.base_url);
  }
  updateContact(id: string, data: Icontact){
  return this._httpClient.put(`${this.base_url}/${id}`, data);  }
}
