import {Component, OnInit} from '@angular/core';
import {PuzzlePiece} from './models/puzzle-piece.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';
  puzzleContent: PuzzlePiece[];

  ngOnInit(): void {
    this.puzzleContent = [
      {display: 'I found a', type: 'static'},
      {display: '', type: 'noun'},
      {display: 'on my way to work', type: 'static'}
    ];
  }
}
