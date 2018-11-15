import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Geolocation {
  results: GeolocationResult[];
}

export interface GeolocationResult {
  locations: GeolocationLocation[];
}

export interface GeolocationLocation {
  latLng: {
    lat: number,
    lng: number
  };
}

@Injectable()
export class MapQuestService {

  constructor(private _http: HttpClient) { }

  public getGeolocation(city: string) {
    return this._http.get(
      'http://www.mapquestapi.com/geocoding/v1/address',
      {
        params: {
          location: city,
          key: '1LcGbGfx6NHDArLXhFKV4a7UVG0LO6Xt'
        }
      }
    ) as Observable<Geolocation>;
  }
}
