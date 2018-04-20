import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() active: boolean = false;
  @Output() close: = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.active = false;
    this.close.emit(false);
  }

}
