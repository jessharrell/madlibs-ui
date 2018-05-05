import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PuzzleComponent } from './puzzle.component';
import { PuzzlePiece } from '../models/puzzle-piece';

describe('PuzzleComponent', () => {
  let component: PuzzleComponent;
  let fixture: ComponentFixture<PuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show content in paragraph when contains string', () => {
    const puzzleText = 'Puzzle given text';

    const puzzleStatic = new PuzzlePiece('static', puzzleText);
    component.puzzle = [puzzleStatic];
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    const puzzleSection: HTMLElement = page.querySelector('.puzzleSection');
    expect(puzzleSection.querySelector('span').textContent.trim()).toEqual(puzzleText);
  });

  it('should show all content strings', () => {
    const puzzleStatic = new PuzzlePiece('static', 'puzzleText');
    component.puzzle = [puzzleStatic, puzzleStatic];
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelectorAll('.puzzleText').length).toBe(2);
  });

  it('should show input instead of span when content value undefined', () => {
    const adjInput = new PuzzlePiece('adjective', '');
    component.puzzle = [adjInput];
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelectorAll('.puzzleInput').length).toBe(1);
    expect(page.querySelectorAll('.puzzleText').length).toBe(0);
  });

  it('should use type as place holder when display undefined', () => {
    const wordType = 'adjective';
    const adjInput = new PuzzlePiece(wordType, '');
    component.puzzle = [adjInput];
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('.puzzleInput').getAttribute('placeholder')).toBe(wordType);
  });

});
