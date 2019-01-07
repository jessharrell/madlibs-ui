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
    return this.http.get<ServerPuzzle>('http://localhost:3000/puzzles/' + puzzleId).map(response => {
          return new PuzzleResource(response.name, response.puzzle);
    });
  }

  createPuzzle(puzzleId: string, puzzle: ServerPuzzle): Observable<object> {
    return this.http.post('http://localhost:3000/puzzles/' + puzzleId, puzzle);
  }
}

class ServerPuzzlePiece {
  type: string;
  text: string;
}

class ServerPuzzle {
  name: string;
  puzzle: ServerPuzzlePiece[];
}
