import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss']
})
export class RatingCardComponent implements OnInit {

  @Input() title: string = "";

  @Input() qtStars: number = 0;

  public arrStars: number[];

  constructor() { }

  ngOnInit(): void {
    this.arrStars = Array.from(Array(parseInt(this.qtStars.toString())), (x, i) => i);
  }

}
