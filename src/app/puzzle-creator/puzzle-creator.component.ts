import { Component, OnInit } from '@angular/core';
import {PuzzleAPI} from '../services/puzzle-api.service';
import {PuzzleCreationMonitor} from '../services/puzzle-creation-monitor';

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
    const puzzle = []
    if (form.value.userValue0) {
      puzzle.push({type: 'static', text: form.value.userValue0});
    }
    this.puzzleApi.createPuzzle(form.value.puzzleId, {name: form.value.puzzleTitle, puzzle: puzzle}).subscribe(object => {
      this.creationMonitor.alert();
    });
  }

  addTextArea(type) {
    this.setOfPieces.push({type: type});
  }
}
