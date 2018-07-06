import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  currentRate = 0;

  @Output()
  ratingValue = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  testBinding() {
    this.ratingValue.emit(this.currentRate);
  }
}
