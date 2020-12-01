import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { RatingCardComponent } from './components/rating-card/rating-card.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { ExpandCardComponent } from './components/expand-card/expand-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ResultPageComponent,
    RatingCardComponent,
    ResultCardComponent,
    ExpandCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
