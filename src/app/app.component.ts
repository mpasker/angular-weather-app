import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { MapQuestService } from './map-quest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public temperature: number;
  public windSpeed: number;
  public summary: string;
  public city: string;

  public cities = [
    { name: 'Atlanta', latitude: 33.7557, longitude: -84.3884 },
    { name: 'New York', latitude: 42.3601, longitude: -71.0589 },
    { name: 'Birmingham', latitude: 33.527444, longitude: -86.799047 }
  ];

  constructor(private _weatherService: WeatherService, private _mapQuestService: MapQuestService) { }


  public getWeatherData(latitude: number, longitude: number) {
    this._weatherService.getWeather(latitude, longitude)
      .subscribe(weather => {
        this.temperature = weather.currently.temperature;
        this.windSpeed = weather.currently.windSpeed;
        this.summary = weather.currently.summary;
      });
  }

  public searchLocation() {
    this._mapQuestService.getGeolocation(this.city)
      .subscribe(geolocation => {
        console.log(geolocation);
        const latitude = geolocation.results[0].locations[0].latLng.lat;
        const longitude = geolocation.results[0].locations[0].latLng.lng;
        this.getWeatherData(latitude, longitude);
      });
  }
}
