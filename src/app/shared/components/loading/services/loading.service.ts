import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingSubject = new Subject<boolean>();

  constructor() {}

  next(newValue: any){
    this.loadingSubject.next(newValue)
  }

  obs(){
    return this.loadingSubject;
  }
}
