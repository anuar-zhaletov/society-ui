import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  constructor(private http: HttpClient) {
  }

  getDemographics() {
    return this.http.get('http://localhost:8080/getDemographicStatistic');
  }
}
