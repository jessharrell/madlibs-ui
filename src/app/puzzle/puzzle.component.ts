import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { PuzzlePiece } from '../models/puzzle-piece';
import {formatPuzzle} from '../services/puzzle-parser.service';

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
      this.formattedPuzzle = formatPuzzle(changes.puzzle.currentValue);
    }
  }
}
