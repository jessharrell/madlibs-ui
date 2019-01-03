import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PuzzleResource} from '../models/puzzle-resource';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PuzzleAPI {
  constructor(private http: HttpClient) {}

  getPuzzleNames(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/puzzles/');
  }

  getPuzzle(puzzleId: string): Observable<PuzzleResource> {
    return this.http.get<PuzzleResponse>('http://localhost:3000/puzzles/' + puzzleId).map(response => {
          return new PuzzleResource(response.name, response.puzzle);
    });
  }
}

class PuzzleResponse {
  readonly name: string;
  readonly puzzle: any[];
}
