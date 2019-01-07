import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class PuzzleCreationMonitor {
  private puzzleCreationSource = new Subject<boolean>();

  puzzleCreated = this.puzzleCreationSource.asObservable();

  alert() {
    this.puzzleCreationSource.next(true);
  }
}
