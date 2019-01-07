import { Component, OnInit } from '@angular/core';
import {PuzzleAPI} from '../services/puzzle-api.service';
import {PuzzleCreationMonitor} from '../services/puzzle-creation-monitor';

@Component({
  selector: 'app-puzzle-creator',
  templateUrl: './puzzle-creator.component.html',
  styleUrls: ['./puzzle-creator.component.less']
})
export class PuzzleCreatorComponent implements OnInit {
  constructor(private readonly puzzleApi: PuzzleAPI, private creationMonitor: PuzzleCreationMonitor) { }

  ngOnInit() {
  }

  savePuzzle(form) {
    this.puzzleApi.createPuzzle(form.value.puzzleId, {name: form.value.puzzleTitle, puzzle: []}).subscribe(object => {
      this.creationMonitor.alert();
    });
  }
}
