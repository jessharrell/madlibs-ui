import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectorComponent} from './selector.component';
import {PuzzleService} from '../puzzle-service.service';
import {Puzzle} from '../models/puzzle';

describe('SelectorComponent', () => {
  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;

  let expectedPuzzles: Puzzle[] = [];
  const getPuzzleService = (): PuzzleService => {
    const fakePuzzleService: PuzzleService = {
      getAllPuzzles: (): Puzzle[] => {
        return expectedPuzzles;
      }
    };
    return fakePuzzleService;
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [SelectorComponent],
      providers: [{provide: PuzzleService, useFactory: getPuzzleService}]
    })
      .compileComponents();
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
});
