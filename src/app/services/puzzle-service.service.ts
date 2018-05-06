import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Puzzle} from '../models/puzzle.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PuzzleService {
  constructor(private http: HttpClient) { }

  getAllPuzzles(): Observable<Puzzle[]> {
    return this.http.get('http://localhost:8081/puzzle').map((response: object) => {
      const puzzles = response['data']['puzzles'];
      return puzzles.map((rawPuzzle) => Puzzle.fromJSONObj(rawPuzzle));
    });
  }
}
