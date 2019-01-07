import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { PuzzlePiece } from '../models/puzzle-piece';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.less']
})
export class PuzzleComponent implements OnChanges {
  @Input()
  public puzzle: PuzzlePiece[];
  formattedPuzzle: PuzzlePiece[][] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.puzzle && changes.puzzle.currentValue) {
      this.formattedPuzzle = [];
      let currPuzzle = changes.puzzle.currentValue;
      let indexOfNewline = currPuzzle.findIndex((piece) => piece.type === 'newline');
      while (indexOfNewline >= 0) {
        this.formattedPuzzle.push(currPuzzle.slice(0, indexOfNewline));
        currPuzzle = currPuzzle.slice(indexOfNewline + 1, currPuzzle.length);
        indexOfNewline = currPuzzle.findIndex((piece) => piece.type === 'newline');
      }
      this.formattedPuzzle.push(currPuzzle);
    }
  }
}
