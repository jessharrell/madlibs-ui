export class Puzzle {
  name: string;

  static fromJSONObj(rawPuzzle: object) {
    return new Puzzle();
    // puzzle.name = rawPuzzle['name'];
  }
}
