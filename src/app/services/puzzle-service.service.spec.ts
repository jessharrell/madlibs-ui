import {TestBed, inject} from '@angular/core/testing';

import {PuzzleService} from './puzzle-service.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Puzzle} from '../models/puzzle.model';

describe('PuzzleService', () => {

  let service: PuzzleService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PuzzleService]
    });
  });

  beforeEach(inject([PuzzleService, HttpTestingController], (puzzleService, httpMock) => {
    service = puzzleService;
    http = httpMock;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllPuzzles', () => {
    it('should return a list of puzzles', () => {
      const puzzlesResponse: object = {
        data: {
          puzzles: [
            {
              name: 'first puzzle',
              content: [{display: '', type: 'adjective'}, {display: 'some text', type: 'static'}]
            }, {
              name: 'second puzzle',
              content: [{display: 'some other text', type: 'static'}, {display: '', type: 'verb'}]
            }
          ]
        }
      };

      service.getAllPuzzles().subscribe((puzzleList: Puzzle[]) => {
        expect(puzzleList.length).toBe(2);
      });

      const request = http.expectOne('http://localhost:8081/puzzle');
      request.flush(puzzlesResponse);
    });
  });
});
