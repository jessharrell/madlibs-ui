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
  setOfPieces: any[] = [];
  constructor(private readonly puzzleApi: PuzzleAPI, private creationMonitor: PuzzleCreationMonitor) { }

  ngOnInit() {
  }

  savePuzzle(form) {
    const puzzle = formToServerPuzzle(form);
    this.puzzleApi.createPuzzle(form.value.puzzleId, puzzle).subscribe(object => {
      this.creationMonitor.alert();
    });
  }

  addTextArea(type) {
    this.setOfPieces.push({type: type});
  }
}
