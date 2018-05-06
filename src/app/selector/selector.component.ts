import { Component, OnInit } from '@angular/core';
import {PuzzleService} from '../services/puzzle-service.service';
import {Puzzle} from '../models/puzzle.model';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.less']
})
export class SelectorComponent implements OnInit {
  public puzzles: Puzzle[];
  public selectedPuzzle: Puzzle;

  constructor(private puzzleService: PuzzleService) { }

  ngOnInit() {
    this.puzzleService.getAllPuzzles().subscribe((puzzles: Puzzle[]) => {
      this.puzzles = puzzles;
    });
  }

  public selectPuzzle(selectedPuzzle: Puzzle) {
    this.selectedPuzzle = selectedPuzzle;
  }
}
