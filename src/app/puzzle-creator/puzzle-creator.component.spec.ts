import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleCreatorComponent } from './puzzle-creator.component';

describe('PuzzleCreatorComponent', () => {
  let component: PuzzleCreatorComponent;
  let fixture: ComponentFixture<PuzzleCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
