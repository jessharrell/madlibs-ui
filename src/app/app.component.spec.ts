import {TestBed, async, inject} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PuzzleComponent} from './puzzle/puzzle.component';
import {PuzzleAPI} from './services/puzzle-api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {PuzzlePiece} from './models/puzzle-piece';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PuzzleComponent
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Default');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Default');
  }));

  it('should display static puzzle from endpoint', inject([HttpTestingController], (httpMock: HttpTestingController) => {
        const puzzleType = 'static'
        const puzzleText = 'This is a fake puzzle';
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        httpMock.expectOne('http://localhost:3000/puzzles/default').flush({name: 'foo', puzzle: [{type: puzzleType, text: puzzleText}]});

        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;

        expect(app.puzzleContent).toEqual([new PuzzlePiece(puzzleType, puzzleText)]);
      })
  );
});
