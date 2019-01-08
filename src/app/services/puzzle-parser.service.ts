import {PuzzlePiece} from '../models/puzzle-piece';

export function formatPuzzle(puzzle: PuzzlePiece[]): PuzzlePiece[][] {
  const formattedPuzzle = [];
  let indexOfNewline = puzzle.findIndex((piece) => piece.type === 'newline');
  while (indexOfNewline >= 0) {
    formattedPuzzle.push(puzzle.slice(0, indexOfNewline));
    puzzle = puzzle.slice(indexOfNewline + 1, puzzle.length);
    indexOfNewline = puzzle.findIndex((piece) => piece.type === 'newline');
  }
  if (puzzle.length > 0) {
    formattedPuzzle.push(puzzle);
  }

  return formattedPuzzle;
}
