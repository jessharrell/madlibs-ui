import {PuzzlePiece} from './puzzle-piece';

export class ServerPuzzlePiece {

  constructor(readonly type: string, readonly text: string){}

  toPuzzlePiece(): PuzzlePiece {
    return {type: this.type, display: this.text};
  }
}
