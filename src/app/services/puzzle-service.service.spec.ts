import {TestBed, inject} from '@angular/core/testing';

import {PuzzleService} from './puzzle-service.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Puzzle} from '../models/puzzle';

describe('PuzzleService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PuzzleService]
    });
  });

  it('should be created', inject([PuzzleService], (service: PuzzleService) => {
    expect(service).toBeTruthy();
  }));

  describe('getAllPuzzles', () => {
    it('should return a list of puzzles', inject([PuzzleService, HttpTestingController], (service: PuzzleService, http: HttpTestingController) => {
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
    }));
  });
});
