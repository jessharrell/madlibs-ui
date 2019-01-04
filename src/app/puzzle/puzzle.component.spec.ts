import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PuzzleComponent } from './puzzle.component';
import { PuzzlePiece } from '../models/puzzle-piece';
import {Component} from '@angular/core';

@Component({
  template: '<app-puzzle [puzzle]="testPuzzle"></app-puzzle>'
})
class TestHostComponent {
  testPuzzle: PuzzlePiece[];
}

describe('PuzzleComponent w/ host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleComponent, TestHostComponent ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should show content in span when type is static inside paragraph', () => {
    const puzzleText = 'Puzzle given text';
    const puzzleStatic = new PuzzlePiece('static', puzzleText);

    testHost.testPuzzle = [puzzleStatic];
    fixture.detectChanges();

    const page: HTMLElement = fixture.nativeElement;
    const puzzleSection: HTMLElement = page.querySelector('.puzzleParagraph').querySelector('.puzzleSection');
    expect(puzzleSection.querySelector('span').textContent.trim()).toEqual(puzzleText);
  });

  it('should show all content strings', () => {
    const puzzleStatic = new PuzzlePiece('static', 'puzzleText');

    testHost.testPuzzle = [puzzleStatic, puzzleStatic];
    fixture.detectChanges();

    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelectorAll('.puzzleText').length).toBe(2);
  });

  it('should show input instead of span when type is not static or newline', () => {
    const adjInput = new PuzzlePiece('adjective', '');

    testHost.testPuzzle = [adjInput];
    fixture.detectChanges();

    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelectorAll('.puzzleInput').length).toBe(1);
    expect(page.querySelectorAll('.puzzleText').length).toBe(0);
  });

  it('should use type as place holder when type is not static or newline', () => {
    const wordType = 'adjective';
    const adjInput = new PuzzlePiece(wordType, '');

    testHost.testPuzzle = [adjInput];
    fixture.detectChanges();

    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('.puzzleInput').getAttribute('placeholder')).toBe(wordType);
  });
});
