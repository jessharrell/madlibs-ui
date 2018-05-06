import {Puzzle} from './puzzle.model';

describe('Puzzle Conversion', () => {
  it('should convert from raw json', () => {
    const rawPuzzle = {
      name: 'my puzzle',
      content: [{display: 'some text', type: 'static'}, {display: 'some text', type: 'static'}]
    };

    const actual = Puzzle.fromJSONObj(rawPuzzle);

    expect(actual.name).toBe('my puzzle');
    expect(actual.pieces.length).toBe(2);
  });
});
