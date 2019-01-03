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
  puzzles: string[] = [];
  title = '';
  puzzleContent: PuzzlePiece[];
  constructor(private puzzleAPI: PuzzleAPI) {}

  ngOnInit(): void {
    this.puzzleAPI.getPuzzleNames().subscribe(puzzleNames => this.puzzles = puzzleNames);

    this.puzzleAPI.getPuzzle('default').subscribe((puzzleResource) => {
        this.puzzleContent = puzzleResource.puzzleContent;
    });
  }

  onPuzzleSelection(selectedPuzzle): void {
    this.puzzleAPI.getPuzzle(selectedPuzzle).subscribe((puzzleResource) => {
      this.title = puzzleResource.title;
    });
  }
}
