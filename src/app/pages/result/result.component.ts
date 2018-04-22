import { Component, OnInit } from '@angular/core';

import { GeralService } from '../../providers/geral.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  data: Object;
  index: number = 0;
  npsResult: any;
  npsCursor: any;
  totalVotos: any;
  percents = {
    promoters: 0,
    neutros: 0,
    detractors: 0
  }


  constructor(public geralService: GeralService) { }

  ngOnInit() {
    this.geralService.getScore().subscribe(
      response => {
        this.data = Object.values(response.data);
        this.npsResult = this.nps(this.data);
        this.npsCursor = this.npsResult >= 0 ? 50 + (this.npsResult * .5) : 50 - (Math.abs(this.npsResult) * .5);
      },
      err => { console.log(err) }
    )
  }

  getScores() {

  }

  nps(scores) {
    let promoters = 0,
        detractors = 0,
        neutros = 0;

        this.totalVotos = scores.length


    for (let score of scores) {
      let item = +score.score;
      if (item <= 6) detractors++;  
      if (item >= 7 && item <= 8) neutros++;
      if (item >= 9) promoters++;
      this.index++
    }


    this.percents.detractors = (detractors / this.totalVotos) * 100;
    this.percents.promoters = (promoters / this.totalVotos) * 100;
    this.percents.neutros =  (neutros / this.totalVotos) * 100;

    return Math.round(((promoters / this.totalVotos) - (detractors / this.totalVotos)) * 100);


  }

}
