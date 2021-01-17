import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  constructor(private http: HttpClient) {
  }

  getCountries() {
    return this.http.get('http://localhost:8080/countries');
  }

  getEducationSystems() {
    return this.http.get('http://localhost:8080/educationSystems');
  }

  updateEducationSystem(data) {
    this.http.get('http://localhost:8080/changeEducationSystem/' + data.country + "/" + data.educationSystem).subscribe();
  }

  getMoralitySystems() {
    return this.http.get('http://localhost:8080/moralitySystems');
  }

  updateMoralitySystem(data) {
    this.http.get('http://localhost:8080/changeMoralitySystem/' + data.country + "/" + data.moralitySystem).subscribe();
  }
}
