import { Component, OnInit } from '@angular/core';
import {ActionService} from '../service/action.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  countries: [];
  educationSystems: [];
  moralitySystems: [];
  politicalSystems: [];
  notification = '';

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.actionService.getCountries().subscribe(res => {
      this.countries = JSON.parse(JSON.stringify(res));
    });

    this.actionService.getEducationSystems().subscribe(res => {
      this.educationSystems = JSON.parse(JSON.stringify(res));
    });

    this.actionService.getMoralitySystems().subscribe(res => {
      this.moralitySystems = JSON.parse(JSON.stringify(res));
    });

    this.actionService.getPoliticalSystems().subscribe(res => {
      this.politicalSystems = JSON.parse(JSON.stringify(res));
    });
  }

  onEducationSystemClickSubmit(data) {
    this.actionService.updateEducationSystem(data);
    this.notification = "Successfully updated education system!";
    setTimeout( () => {
      this.notification = "";
    }, 4000);
  }

  onMoralitySystemClickSubmit(data) {
    this.actionService.updateMoralitySystem(data);
    this.notification = "Successfully updated morality system!";
    setTimeout( () => {
      this.notification = "";
    }, 4000);
  }

  onPoliticalSystemClickSubmit(data) {
    this.actionService.updatePoliticalSystem(data);
    this.notification = "Successfully updated political system!";
    setTimeout( () => {
      this.notification = "";
    }, 4000);
  }
}
