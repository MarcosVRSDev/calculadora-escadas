import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;
  public mobile: boolean = false;

  constructor(private router: Router) {
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);

    if (this.screenWidth <= 700) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }

}
