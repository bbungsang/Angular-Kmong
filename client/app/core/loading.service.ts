import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingService {

  loadingChange = new Subject<boolean>();
  onLoadingChanged$ = this.loadingChange.asObservable();

  constructor() { }

  startLoading() {
    this.loadingChange.next(true);
  }

  endLoading() {
    this.loadingChange.next(false);
  }


}
