import {Component, OnInit} from '@angular/core';
import d3 from 'd3';
import * as d3Hexbin from 'd3-hexbin';
import {HeatmapService} from '../service/heatmap.service';
import {Human} from '../model/human';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent implements OnInit {
  human: Human;

  constructor(private heatmapService: HeatmapService) {
  }

  ngOnInit(): void {
    let margin = {top: 30, right: 0, bottom: 20, left: 10};
    let width = 800, height = 500;
    let MapColumns = 60, MapRows = 50;
    let hexRadius = d3.min([width / ((MapColumns + 0.5) * Math.sqrt(3)), height / ((MapRows + 1 / 3) * 1.5)]);
    width = MapColumns * hexRadius * Math.sqrt(3);
    height = MapRows * 1.5 * hexRadius + 0.5 * hexRadius;
    let hexbin = d3Hexbin.hexbin().radius(hexRadius);

    // setInterval(() => {
    this.heatmapService.getHumanity().subscribe(res => {
        let humanity: Human[] = res;

        let colors = humanity.map(human => {
          switch (human.personality) {
            case "ARCHITECT": return "#E9FF63";
            case "LOGICIAN": return "#FFC263";
            case "COMMANDER": return "#63FFB8";
            case "DEBATER": return "#FF7563";
            case "ADVOCATE": return "#E3FF63";
            case "MEDIATOR": return "#63FF6A";
            case "PROTAGONIST": return "#63FFF1";
            case "CAMPAIGNER": return "#64FF67";
            case "LOGISTICIAN": return "#5C73F2";
            case "DEFENDER": return "#A6FF63";
            case "EXECUTIVE": return "#FFB663";
            case "CONSUL": return "#90FF63";
            case "VIRTUOSO": return "#62FF73";
            case "ADVENTURER": return "#B6FF63";
            case "ENTREPRENEUR": return "#FF7263";
            case "ENTERTAINER": return "#aeff63";
            default: return "#000000";
          }
        });

      let map = new Map<String, number>();
      let humanIndex = 0;

        let points = [];
        for (let i = 0; i < MapRows; i++) {
          for (let j = 0; j < MapColumns; j++) {
            let x = hexRadius * j * Math.sqrt(3);
            if (i % 2 === 1) {
              x += (hexRadius * Math.sqrt(3)) / 2;
            }
            let y = hexRadius * i * 1.5;
            points.push([x, y]);

            if (humanity[humanIndex]) {
              map.set(x.toFixed(5) + ":" + y.toFixed(5), humanity[humanIndex++].id);
            }
          }
        }

        d3.select("svg").remove();

        let svg = d3.select('#chart').append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        svg.append('g')
          .selectAll('.hexagon')
          .data(hexbin(points))
          .enter().append('path')
          .attr('class', 'hexagon')
          .attr('d', function(d) {
            return 'M' + d.x + ',' + d.y + hexbin.hexagon();
          })
          .attr('stroke', function(d, i) {
            return '#fff';
          })
          .attr('stroke-width', '1px')
          .style('fill', function(d, i) {
            return colors[i];
          })
          .on('click', (d) => {
            let id = map.get(d.x.toFixed(5) + ":" + d.y.toFixed(5));
            this.heatmapService.getHuman(id).subscribe(res => {
              let human: Human = res;
              this.human = human;
            });
          });
      });
    // }, 2000);
  }

}
