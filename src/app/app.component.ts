import {Component, OnInit} from '@angular/core';
import {PuzzlePiece} from './models/puzzle-piece';
import {PuzzleAPI} from './services/puzzle-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [PuzzleAPI],
})
export class AppComponent implements OnInit {
  selectedPuzzle = 'Select Puzzle';
  puzzles: string[] = [];
  title = '';
  puzzleContent: PuzzlePiece[];
  constructor(private puzzleAPI: PuzzleAPI) {}

  ngOnInit(): void {
    this.puzzleAPI.getPuzzleNames().subscribe(puzzleNames => this.puzzles = puzzleNames);
  }

  onPuzzleSelection(selectedPuzzle): void {
    this.puzzleAPI.getPuzzle(selectedPuzzle).subscribe((puzzleResource) => {
      this.title = puzzleResource.title;
      this.puzzleContent = puzzleResource.puzzleContent;
    });
  }
}
