import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Result } from '../../models/result.model';

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
  public finalResults: Result[] = [];

  public mirroMax1: number = 17;
  public mirroMax2: number = 18.2;
  public mirroMax3: number = 19;
  public mirroMax4: number = 20;
  public mirroMax5: number = 15;
  public mirrorMax6: number = 17.8;

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

    var initsResults: Result[] = this.returnInitiArray();

    initsResults.forEach(result => {
      result.setFloorHeight(this.stairHeight);
      result.setSteps(this.stairHeight);
      result.setMirror(this.stairHeight);
      result.setLength();

      if (this.finalResults.length > 0) {
        if (!result.validadeEquals(this.finalResults)) {
          this.finalResults.push(result);
        }
      } else {
        this.finalResults.push(result);
      }
    });
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

  mirrorNumber(valueA: number, valueB: number): number {
    return Math.ceil(valueA / valueB);
  }

  mirrorHeight(valueA: number, valueB: number) {
    var result = this.mirrorNumber(valueA, valueB);

    return parseFloat((valueA / result).toString()).toFixed(1);
  }

  returnInitiArray(): Result[] {
    var array: Result[] = [];

    var result1: Result = new Result(17, "MELHOR DE TODAS", 5, "../../../assets/result-1.svg", 0, 0, 30, 0, 0, true, "observação: aprovado pela maioria das prefeituras.", true);
    array.push(result1);

    var result2: Result = new Result(17.8, "CONFORTÁVEL", 4, "../../../assets/result-2.svg", 0, 0, 27.5, 0, 0, true, "observação: aprovado pela maioria das prefeituras.", true);
    array.push(result2);

    var result3: Result = new Result(18.2, "RAZOÁVEL", 3, "../../../assets/result-3.svg", 0, 0, 27.5, 0, 0, true, "observação: aprovado por algumas prefeituras.", true);
    array.push(result3);

    var result4: Result = new Result(20, "BOA PARA PASSOS GRANDES", 3, "../../../assets/result-4.svg", 0, 0, 30, 0, 0, false, "", true);
    array.push(result4);

    var result5: Result = new Result(15, "BOA PARA CRIANÇAS", 3, "../../../assets/result-5.svg", 0, 0, 25, 0, 0, false, "", true);
    array.push(result5);

    var result6: Result = new Result(19, "RUINZINHA", 2, "../../../assets/result-6.svg", 0, 0, 25, 0, 0, true, "observação: aprovado por algumas prefeituras.", true);
    array.push(result6);

    var result6: Result = new Result(20, "SÓ EM ÚLTIMO CASO", 1, "../../../assets/result-7.svg", 0, 0, 20, 0, 0, true, "observação: só use se não tiver mais espaço!", true);
    array.push(result6);

    return array;
  }

}
