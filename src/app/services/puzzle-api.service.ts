import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {PuzzleResource} from '../models/puzzle-resource';
import {HttpClient, HttpEventType, HttpRequest} from '@angular/common/http';
import {PuzzlePiece} from '../models/puzzle-piece';

@Injectable()
export class PuzzleAPI {
  constructor(private http: HttpClient) {}

  getPuzzle(): Observable<PuzzleResource> {
    return this.http.get<PuzzleResponse>('http://localhost:3000/puzzle/default').map(response => {
          return new PuzzleResource(response.name, response.puzzle);
    });
  }
}

class PuzzleResponse {
  readonly name: string;
  readonly puzzle: PuzzlePiece[];
}
