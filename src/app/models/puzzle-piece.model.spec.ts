import {PuzzlePiece} from './puzzle-piece.model';

describe('Puzzle Piece Conversion', () => {
  it('should convert from raw json', () => {
    const rawPuzzlePiece = {
      type: 'static',
      display: 'some text to display'
    };

    const actual = PuzzlePiece.fromJSONObj(rawPuzzlePiece);

    expect(actual.type).toBe('static');
    expect(actual.display).toBe('some text to display');
  });
});
