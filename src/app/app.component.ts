import {Component, OnInit} from '@angular/core';
import {PuzzlePiece} from './models/puzzle-piece';
import {Http} from '@angular/http';
import {PuzzleAPI} from './services/puzzle-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [PuzzleAPI],
})
export class AppComponent implements OnInit {
  title = 'Default';
  puzzleContent: PuzzlePiece[];
  constructor(private puzzleAPI: PuzzleAPI) {}

  ngOnInit(): void {
    this.puzzleAPI.getPuzzle().subscribe((puzzleResource) => {
        this.puzzleContent = puzzleResource.puzzleContent;
    });
  }
}
