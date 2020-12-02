import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      stairHeight: ['', Validators.compose([
        Validators.required,
      ])]
    });

  }

  ngOnInit(): void {
  }

  goToResult() {
    //this.router.navigate(['/', 'resultado']);
    this.router.navigateByUrl(`/resultado/${this.form.value.stairHeight}`);
  }

}
