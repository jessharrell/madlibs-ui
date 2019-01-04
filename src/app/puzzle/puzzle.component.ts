import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { PuzzlePiece } from '../models/puzzle-piece';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.less']
})
export class PuzzleComponent implements OnChanges {
  @Input()
  public puzzle: PuzzlePiece[] = [new PuzzlePiece('foo', 'not a real element')];
  formattedPuzzle: PuzzlePiece[];
  foo: number[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.puzzle) {
      this.formattedPuzzle = changes.puzzle.currentValue.filter((piece) => piece.type === 'newline');
    }
  }
}
