import { Component, OnInit } from '@angular/core';
import {ShareService} from './../shared.service';
@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  public title = '' ;
  public desc = '';
  public id = 0;
  public arr ;
  public order = 1 ;
  public nums = [] ;
  public focused = false ;
  public texta = false ;
  constructor(private _sharedService: ShareService) { }

  ngOnInit() {
    this._sharedService.deleteFormOrder.subscribe( text => {
      if (text === 'delete last one') {
        this.nums.pop();
        if ((this.nums.length ) === 0 ) {
          this.order = 1;
        } else {
          this.order = this.nums[this.nums.length - 1];
        }
      }
    });
  }
  add() {
    if ( this.title === '' || this.desc === '') {
      alert('empty field not acceptable');
      return;
    }
    this.arr = {id: this.id , title: this.title, desc: this.desc , order : this.order  };
    this.title = '';
    this.desc = '';
    this.id ++ ;
    this.nums.push(this.nums.length + 2);
    this.order = this.nums[this.nums.length - 1];
    this._sharedService.emitChange(this.arr);
    this.focused = false;
  }


}
