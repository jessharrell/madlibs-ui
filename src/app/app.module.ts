import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { SelectorComponent } from './selector/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
