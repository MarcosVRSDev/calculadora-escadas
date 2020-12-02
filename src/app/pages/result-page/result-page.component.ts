import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;
  public mobile: boolean = false;

  public stairHeight: number;

  public mirroMax1: number = 17.15;
  public mirroMax2: number = 18.2;
  public mirroMax3: number = 19;
  public mirroMax4: number = 20;

  public floorFixed1: number = 30;
  public floorFixed2: number = 27.5;
  public floorFixed3: number = 25;
  public floorFixed4: number = 20;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.stairHeight = parseFloat(this.route.snapshot.paramMap.get('stairHeight'));
    console.log(Math.ceil(this.stairHeight / this.mirroMax1));
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if (this.screenWidth <= 700) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  roundUp(valueA: number, valueB: number) {
    return Math.ceil(valueA / valueB);
  }

}
