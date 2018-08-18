import { Component, OnInit } from '@angular/core';
import {ShareService} from './../shared.service';
@Component({
  selector: 'app-todoshow',
  templateUrl: './todoshow.component.html',
  styleUrls: ['./todoshow.component.css']
})
export class TodoshowComponent implements OnInit {
  public array = [];
  public index ;
  constructor(private _sharedService: ShareService) { }

  ngOnInit() {
    this._sharedService.changeEmitted$.subscribe(
      text => {
        this.array.splice(text.order - 1, 0, text);
      });
  }

  delete(id) {
    for ( this.index = 0; this.index < this.array.length; this.index++) {
      if (this.array[this.index].id === id ) {
        this.array.splice(this.index, 1);
        this._sharedService.delete('delete last one');
      }
        }

  }
}
