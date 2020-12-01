import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expand-card',
  templateUrl: './expand-card.component.html',
  styleUrls: ['./expand-card.component.scss']
})
export class ExpandCardComponent implements OnInit {

  @Input() isCollapsed = true;
  @Input() title: string = "";
  @Input() qtStars: number = 0;
  @Input() imgSrc: string = "";
  @Input() floorHeight: string = "";
  @Input() steps: string = "";
  @Input() floor: string = "";
  @Input() mirror: string = "";
  @Input() length: string = "";

  public arrStars: number[];

  constructor() { }

  ngOnInit(): void {
    this.arrStars = Array.from(Array(parseInt(this.qtStars.toString())), (x, i) => i);
  }

}
