import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectorComponent} from './selector.component';
import {PuzzleService} from '../services/puzzle-service.service';
import {Puzzle} from '../models/puzzle';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('SelectorComponent', () => {
  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;

  let expectedPuzzles: Puzzle[] = [];
  const getPuzzleService = (): PuzzleService => {
    return {
      getAllPuzzles: (): Observable<Puzzle[]> => {
        return Observable.of(expectedPuzzles);
      }
    } as PuzzleService;
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [SelectorComponent],
      providers: [{provide: PuzzleService, useFactory: getPuzzleService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays single puzzle with name', () => {
    const puzzle = new Puzzle();
    puzzle.name = 'My Favorite Puzzle';
    expectedPuzzles = [puzzle];

    component.ngOnInit();
    fixture.detectChanges();

    const puzzleList: HTMLElement = fixture.nativeElement.querySelector('ul');
    const puzzleItem: HTMLElement = puzzleList.querySelector('.puzzleItem');
    expect(puzzleItem).not.toBeNull();
    expect(puzzleItem.textContent.trim()).toBe(puzzle.name);
  });

  it('displays lists of puzzles by name', () => {
    const puzzle1 = new Puzzle();
    const puzzleName1 = 'First Puzzle';
    puzzle1.name = puzzleName1;
    const puzzle2 = new Puzzle();
    const puzzleName2 = 'Second Puzzle';
    puzzle2.name = puzzleName2;
    expectedPuzzles = [puzzle1, puzzle2];
    const expectedPuzzleNames = [puzzleName1, puzzleName2];

    component.ngOnInit();
    fixture.detectChanges();

    const puzzleItems = fixture.nativeElement.querySelectorAll('.puzzleItem');
    const actualPuzzleNames: string[] = [];
    puzzleItems.forEach((el: HTMLElement) => {
      actualPuzzleNames.push(el.textContent.trim());
    });
    expect(actualPuzzleNames).toEqual(expectedPuzzleNames);
  });

  it('outputs single puzzle on click', () => {
    const puzzle = new Puzzle();
    puzzle.name = 'puzzle to select';
    expectedPuzzles = [puzzle];
    component.ngOnInit();
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.puzzleItem').click();

    expect(component.selectedPuzzle).toBe(puzzle);
  });
});
