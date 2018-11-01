import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface WeatherData {
  currently: {
    temperature: number,
    summary: string,
    icon: string,
    windSpeed: number
  };

}
@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  public getWeather(): Observable<WeatherData> {
    return this._http.get(
      'https://api.darksky.net/forecast/546a33937740ac4c54a19f8c242fe265/42.3601,-71.0589'
    ) as Observable<WeatherData>;
  }
}
