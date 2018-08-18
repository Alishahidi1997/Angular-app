import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() {
  }
  private emitDelete = new Subject<any>();
  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();
  deleteFormOrder = this.emitDelete.asObservable();
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  delete(string: String) {
    this.emitDelete.next(string);
  }

}
