import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StatisticService } from '../service/statistic.service';
import {Demographic} from '../model/Demographic';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  demographic: Demographic;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private statisticService: StatisticService) { }

  ngOnInit() {
    setInterval( () => {
      this.statisticService.getDemographics().subscribe((res) => {
        this.demographic = res;
      });
    }, 1000);
  }
}
