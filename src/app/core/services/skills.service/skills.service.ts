import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iskills } from '../../models/iskills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {

  private base_url = 'http://localhost:3000/dashboard/skills';

  constructor(private _httpClient: HttpClient) {}

  // ✅ رجع Array مش any
  getSkills(): Observable<Iskills[]> {
    return this._httpClient.get<Iskills[]>(this.base_url);
  }

  addSkill(data: Omit<Iskills, '_id'>): Observable<Iskills> {
    return this._httpClient.post<Iskills>(this.base_url, data);
  }

  updateSkills(id: string, data: Omit<Iskills, '_id'>): Observable<Iskills> {
    return this._httpClient.put<Iskills>(`${this.base_url}/${id}`, data);
  }

  deleteSkill(id: string): Observable<void> {
    return this._httpClient.delete<void>(`${this.base_url}/${id}`);
  }
}

