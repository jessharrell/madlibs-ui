import {PuzzlePiece} from './puzzle-piece';

export class PuzzleResource {
  readonly puzzleContent;
  constructor(public readonly title: string, content: any[]) {
    this.puzzleContent = content.map((piece) => new PuzzlePiece(piece.type, piece.text));
  }
}
