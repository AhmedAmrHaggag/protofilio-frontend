import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iprojects } from '../../models/iprojects';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private base_url = 'http://localhost:3000/dashboard/projects'
constructor(private _httpClient:HttpClient){};

getProjects():Observable<Iprojects[]> {
  return this._httpClient.get<Iprojects []>(this.base_url);
}
  addProject(data: Omit<Iprojects, '_id'>): Observable<Iprojects> {
    return this._httpClient.post<Iprojects>(this.base_url, data);
  }

  updateProjects(id: string, data: Omit<Iprojects, '_id'>): Observable<Iprojects> {
    return this._httpClient.put<Iprojects>(`${this.base_url}/${id}`, data);
  }

  deleteProject(id: string): Observable<void> {
    return this._httpClient.delete<void>(`${this.base_url}/${id}`);
  }
}
