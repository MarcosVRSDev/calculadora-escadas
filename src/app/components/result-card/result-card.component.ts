import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  @Input() imgSrc: string = "";
  @Input() floorHeight: string = "";
  @Input() steps: string = "";
  @Input() floor: string = "";
  @Input() mirror: string = "";
  @Input() length: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
