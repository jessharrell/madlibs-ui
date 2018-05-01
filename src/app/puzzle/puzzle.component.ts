import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.less']
})
export class PuzzleComponent implements OnInit {
  @Input()
  public puzzle: string[] = ['junk', 'more junk'];

  constructor() { }

  ngOnInit() {
  }

}
