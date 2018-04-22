import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { GeralService } from '../../providers/geral.service'

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RatingComponent implements OnInit {
  listScore: Array<number> = [];
  currentHoverScore: number;
  modalActive: boolean = false;
  commentHeight: any = 1;
  baseScrollHeight: any;
  commentValue: string;
  lengthCharactes: number = 0;
  btnDisabled: boolean = true;
  modalMsg: boolean = false;
  score: string;
  emoji: string;
  chaveNps: any;
  hideRating: boolean = false;

  constructor(public geralService: GeralService) { }

  ngOnInit() {
    this.listScore = new Array(11);
  }

  openModal() {
    this.modalActive = true;
  }

  closeModal() {
    this.modalActive = false;
  }

  countCharacter(ev) {
    this.lengthCharactes = ev.target.value.length;
    this.btnDisabled = this.lengthCharactes > 3 ? false : true;
  }


  getEmoji(score) {
    let emoji;
    if (score <= 6) emoji = 'ap-pensive';
    if (score >= 7 && score <= 8) emoji = 'ap-blush';
    if (score >= 9) emoji = 'ap-smiley';

    return emoji;
  }

  getScore(score: number) {
    this.score = score.toString();
    this.emoji = this.getEmoji(score);
    this.modalActive = true;
  }

  sendComment() {
    this.modalMsg = true;

    // Grava o Score
    this.geralService.registerScore(this.score).subscribe(
      response => { 
        this.chaveNps = response.data.id;

        let data = new Object({
          id: this.chaveNps,
          comment: this.commentValue
        })

        // Grava o Comentario
        this.geralService.registerScore('', data).subscribe(

          response => { 
            console.log(response);
            this.hideRating = true;
          },
          err => { console.log(err)}

          

        )// Grava o Comentario

      },

      err => { console.log(err) }
      
    )// Grava o Score

  }

}
