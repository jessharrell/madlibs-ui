import {PuzzlePiece} from './puzzle-piece';

export class PuzzleResource {
  constructor(public readonly title: string, public readonly content: PuzzlePiece[]) {
  }
}
