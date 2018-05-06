export class PuzzlePiece {
  constructor(public readonly type: string, public display: string) {
  }

  static fromJSONObj(rawPiece: object) {
    return new PuzzlePiece('foo', 'bar');
  }
}
