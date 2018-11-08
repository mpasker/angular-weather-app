import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public temperature: number;
  public windSpeed: number;
  public summary: string;

  public cities = [
    { name: 'Atlanta', latitude: 33.7557, longitude: -84.3884 },
    { name: 'New York', latitude: 42.3601, longitude: -71.0589 },
    { name: 'Birmingham', latitude: 33.527444, longitude: -86.799047 }
  ];

  constructor(private _weatherService: WeatherService) { }


  public getWeatherData(latitude: number, longitude: number) {
    this._weatherService.getWeather(latitude, longitude)
      .subscribe(weather => {
        this.temperature = weather.currently.temperature;
        this.windSpeed = weather.currently.windSpeed;
        this.summary = weather.currently.summary;
      });
  }
}
