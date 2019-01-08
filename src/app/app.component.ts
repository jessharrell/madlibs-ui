import {Component, OnInit} from '@angular/core';
import {PuzzlePiece} from './models/puzzle-piece';
import {PuzzleAPI} from './services/puzzle-api.service';
import {PuzzleCreationMonitor} from './services/puzzle-creation-monitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [PuzzleAPI, PuzzleCreationMonitor],
})
export class AppComponent implements OnInit {
  selectedPuzzle = 'Select Puzzle';
  puzzles: string[] = [];

  title = '';
  puzzleContent: PuzzlePiece[];

  showCreator: boolean;

  constructor(private puzzleAPI: PuzzleAPI, private creationMonitor: PuzzleCreationMonitor) {}

  ngOnInit(): void {
    this.puzzleAPI.getPuzzleNames().subscribe(puzzleNames => this.puzzles = puzzleNames);
    this.creationMonitor.puzzleCreated.subscribe(created => {
      this.puzzleAPI.getPuzzleNames().subscribe(puzzleNames => this.puzzles = puzzleNames);
    });
  }

  onPuzzleSelection(selectedPuzzle): void {
    this.puzzleAPI.getPuzzle(selectedPuzzle).subscribe((puzzleResource) => {
      this.title = puzzleResource.title;
      this.puzzleContent = puzzleResource.puzzleContent;
    });
  }

  createPuzzleTemplate() {
    this.title = '';
    this.puzzleContent = [];
    this.showCreator = true;
  }
}
