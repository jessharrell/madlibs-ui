import {TestBed, async, inject} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PuzzleComponent} from './puzzle/puzzle.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {PuzzleCreatorComponent} from './puzzle-creator/puzzle-creator.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PuzzleComponent,
        PuzzleCreatorComponent
      ],
      imports: [HttpClientTestingModule, FormsModule]
    }).compileComponents();

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should display welcome message to instruct user', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const welcomeMessage = fixture.debugElement.query(By.css('#welcome')).nativeElement;
    expect(welcomeMessage.textContent).toContain('Please Select a Puzzle to Begin');
  });

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
});
