import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public displayError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  getWeatherData(city: string):Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeader, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeader, environment.XRapidAPIKeyValue),
      params: new HttpParams()
        .set('q', city)
        .set('units', 'metric')
        .set('mode', 'json')
    }).pipe(catchError((error: HttpErrorResponse):Observable<any> => {
      return this.displayError(error);
    }))
  }
}
