import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import {HttpClientModule} from '@angular/common/http';
import {PuzzleAPI} from './services/puzzle-api.service';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
