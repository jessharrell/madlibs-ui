import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PuzzleCreatorComponent } from './puzzle-creator.component';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Component} from '@angular/core';
import {PuzzlePiece} from '../models/puzzle-piece';
import {PuzzleAPI} from '../services/puzzle-api.service';
import {PuzzleCreationMonitor} from '../services/puzzle-creation-monitor';
import {HttpClientTestingModule} from '@angular/common/http/testing';

@Component({
  template: '<app-puzzle-creator></app-puzzle-creator>',
  providers: [PuzzleAPI, PuzzleCreationMonitor],
})
class TestHostComponent {
}

describe('PuzzleCreatorComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleCreatorComponent, TestHostComponent ],
      imports: [
        FormsModule, HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create host with component', () => {
    expect(testHost).toBeTruthy();
  });

  it('should add text box when user click add text', () => {
    const createTextButton = fixture.debugElement.query(By.css('#createTextButton')).nativeElement as HTMLElement;
    createTextButton.click();
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('textarea')).length).toEqual(1);
  });
});
