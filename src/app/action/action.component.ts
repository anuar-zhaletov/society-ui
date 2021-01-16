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
  notification = '';

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.actionService.getCountries().subscribe(res => {
      this.countries = JSON.parse(JSON.stringify(res));
    });

    this.actionService.getEducationSystems().subscribe(res => {
      this.educationSystems = JSON.parse(JSON.stringify(res));
    });
  }

  onClickSubmit(data) {
    this.actionService.updateEducationSystem(data);
    this.notification = "Successfully updated education system!";
    setTimeout( () => {
      this.notification = "";
    }, 4000);
  }
}
