import {PuzzlePiece} from '../models/puzzle-piece';
import {ServerPuzzlePiece} from '../models/server-puzzle-piece';
import {ServerPuzzle} from '../models/server-puzzle';

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

export function formToServerPuzzle(form: any): ServerPuzzle {
  const puzzlePieces: ServerPuzzlePiece[] = []
  if (form.value.userValue0) {
    puzzlePieces.push({type: 'static', text: form.value.userValue0});
  }
  return {name: form.value.puzzleTitle as string, puzzle: puzzlePieces};
}
