import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Puzzle} from './models/puzzle';

@Injectable()
export class PuzzleService {
  constructor() { }

  getAllPuzzles(): Observable<Puzzle[]> {
    return Observable.of([]);
  }
}
