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
  public validMessage: boolean = true;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      stairHeight: ['', Validators.compose([
        Validators.required
      ])]
    });

  }

  ngOnInit(): void {
  }


  goToResult() {
    if (this.form.valid) {
      this.validMessage = true;
      this.router.navigateByUrl(`/resultado/${this.form.value.stairHeight}`);
    } else {
      this.validMessage = false;
    }
  }

}
