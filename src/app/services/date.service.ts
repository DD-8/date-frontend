import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  setDateWithTimezoneOffset(date: Date) {
    let offset: number = date.getTimezoneOffset() / -60;
    let hours: number = Math.trunc(offset);
    let minutes: number = Math.floor((offset - hours) * 60);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
  }
}
