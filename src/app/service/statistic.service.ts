import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Demographic} from '../model/demographic';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  constructor(private http: HttpClient) {
  }

  getDemographics() {
    return this.http.get<Demographic>('http://localhost:8080/getDemographicStatistic');
  }
}
