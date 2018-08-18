import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todoparent',
  templateUrl: './todoparent.component.html',
  styleUrls: ['./todoparent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoparentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
