import {TestBed, async, inject} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PuzzleComponent} from './puzzle/puzzle.component';
import {PuzzleAPI} from './services/puzzle-api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {PuzzlePiece} from './models/puzzle-piece';
import {By} from '@angular/platform-browser';

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

  it(`should have as title '' before user interacts`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('');
  }));

  it('should display puzzle selector with puzzles from service', inject([HttpTestingController], (httpMock: HttpTestingController) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    httpMock.expectOne('http://localhost:3000/puzzles/').flush(['default', 'One', 'Dos']);
    fixture.detectChanges();
    const options = fixture.debugElement.query(By.css('select')).nativeElement.options;
    expect(options.length).toEqual(4);
    expect(options.namedItem('default' + '_selector')).not.toBeNull();
    expect(options.namedItem('One' + '_selector')).not.toBeNull();
    expect(options.namedItem('Dos' + '_selector')).not.toBeNull();
  }));

  it('should have selector prompt regardless of service response', inject([HttpTestingController], (httpMock: HttpTestingController) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    httpMock.expectOne('http://localhost:3000/puzzles/').flush([]);
    fixture.detectChanges();
    const options = fixture.debugElement.query(By.css('select')).nativeElement.options;
    expect(options.length).toEqual(1);
    expect(options.namedItem('Select Puzzle')).toBeDefined();
  }));

  it('should display static puzzle from endpoint', inject([HttpTestingController], (httpMock: HttpTestingController) => {
        const puzzleType = 'static';
        const puzzleText = 'This is a fake puzzle';
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        httpMock.expectOne('http://localhost:3000/puzzles/default').flush({name: 'foo', puzzle: [{type: puzzleType, text: puzzleText}]});

        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;

        expect(app.puzzleContent).toEqual([new PuzzlePiece(puzzleType, puzzleText)]);
      })
  );

  it('should display noun input in puzzle', inject([HttpTestingController], (httpMock: HttpTestingController) => {
      const puzzleType = 'noun';
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      httpMock.expectOne('http://localhost:3000/puzzles/default').flush({name: 'foo', puzzle: [{type: puzzleType, text: ''}]});

      fixture.detectChanges();
      const app = fixture.debugElement.componentInstance;

      expect(app.puzzleContent).toEqual([new PuzzlePiece(puzzleType, '')]);
    })
  );
});
