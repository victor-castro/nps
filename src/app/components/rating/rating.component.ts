import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RatingComponent implements OnInit {
  listScore: Array<number> = [];
  currentHoverScore: number;
  modalActive: boolean = true;

  constructor() { }

  ngOnInit() {
    this.listScore = new Array(11);
  }

  openModal() {
    this.modalActive = true;
  }

  closeModal() {
    this.modalActive = false;
  }

}
