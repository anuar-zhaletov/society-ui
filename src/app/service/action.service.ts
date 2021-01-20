import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  constructor(private http: HttpClient) {
  }

  getEducationSystems() {
    return this.http.get('http://localhost:8080/educationSystems');
  }

  updateEducationSystem(data) {
    this.http.get('http://localhost:8080/changeEducationSystem/' + data.educationSystem).subscribe();
  }

  getMoralitySystems() {
    return this.http.get('http://localhost:8080/moralitySystems');
  }

  updateMoralitySystem(data) {
    this.http.get('http://localhost:8080/changeMoralitySystem/' + data.moralitySystem).subscribe();
  }
}
