import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(private http: HttpClient) { }

  public URL_NUMBERS =  'https://demo7595722.mockable.io/getValues';
  public URL_RANGE = 'https://demo7595722.mockable.io/getRange';

  public getNumbers(): Observable<any> {
    return this.http.get<any>(this.URL_NUMBERS).pipe(
      catchError(e => {return throwError(e)})
    )
  }

  public getRange(): Observable<any> {
    return this.http.get<any>(this.URL_RANGE).pipe(
      catchError(e => {return throwError(e)})
    )
  }
}
