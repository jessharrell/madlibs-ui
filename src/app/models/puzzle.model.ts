import {PuzzlePiece} from './puzzle-piece.model';

export class Puzzle {
  name: string;
  pieces: PuzzlePiece[];

  static fromJSONObj(rawPuzzle: object) {
    const puzzle = new Puzzle();
    puzzle.name = rawPuzzle['name'];
    puzzle.pieces = rawPuzzle['content'].map((rawPiece) => PuzzlePiece.fromJSONObj(rawPiece));
    return puzzle;
  }
}
