import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Human} from '../model/human';

@Injectable({
  providedIn: 'root'
})
export class HeatmapService {

  constructor(private http: HttpClient) { }

  getHumanity() {
    return this.http.get<Human[]>('http://localhost:8080/humanity');
  }

  getHuman(id: number) {
    return this.http.get<Human>('http://localhost:8080/human/' + id);
  }
}
