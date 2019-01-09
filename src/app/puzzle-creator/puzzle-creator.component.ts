import { Component, OnInit } from '@angular/core';
import {PuzzleAPI} from '../services/puzzle-api.service';
import {PuzzleCreationMonitor} from '../services/puzzle-creation-monitor';
import {formToServerPuzzle} from '../services/puzzle-parser.service';

@Component({
  selector: 'app-puzzle-creator',
  templateUrl: './puzzle-creator.component.html',
  styleUrls: ['./puzzle-creator.component.less']
})
export class PuzzleCreatorComponent implements OnInit {
  setOfPieces: string[] = [];
  constructor(private readonly puzzleApi: PuzzleAPI, private creationMonitor: PuzzleCreationMonitor) { }

  ngOnInit() {
  }

  savePuzzle(form) {
    const puzzle = formToServerPuzzle(form, this.setOfPieces);
    this.puzzleApi.createPuzzle(form.value.puzzleId, puzzle).subscribe(object => {
      this.creationMonitor.alert();
      form.reset();
      this.setOfPieces = [];
    });
  }

  addTextArea(type: string) {
    this.setOfPieces.push(type);
  }
}
