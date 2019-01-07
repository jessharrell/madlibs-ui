import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PuzzleCreatorComponent } from './puzzle-creator.component';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Component} from '@angular/core';
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
    expect(fixture.debugElement.queryAll(By.css('.staticInput')).length).toEqual(1);
  });

  it('should add input when user clicks add input', () => {
    const createDynamicButton = fixture.debugElement.query(By.css('#createDynamicButton')).nativeElement as HTMLElement;
    createDynamicButton.click()
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.dynamicInput')).length).toEqual(1);
  });

  it('should add empty input container when user selects to add space', () => {
    const createNewlineButton = fixture.debugElement.query(By.css('#createNewlineButton')).nativeElement as HTMLElement;
    createNewlineButton.click();
    fixture.detectChanges();
    const allInputContainers = fixture.debugElement.queryAll(By.css('.puzzleInputContainer'));
    expect(allInputContainers.length).toEqual(1);
    expect(allInputContainers[0].children.length).toEqual(0);
  });
});
