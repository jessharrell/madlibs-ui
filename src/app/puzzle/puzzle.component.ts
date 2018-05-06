import { Component, OnInit, Input } from '@angular/core';
import { PuzzlePiece } from '../models/puzzle-piece.model';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.less']
})
export class PuzzleComponent implements OnInit {
  @Input()
  public puzzle: PuzzlePiece[] = [];

  constructor() { }

  ngOnInit() {
  }

}
