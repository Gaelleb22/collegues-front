import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbdCarouselBasic } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NgbdCarouselBasic
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [NgbdCarouselBasic]
})
export class AppModule { }
