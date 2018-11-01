import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public temperature: number;

  constructor(private _weatherService: WeatherService) { }


  public getWeatherData() {
    this._weatherService.getWeather()
      .subscribe(weather => {
        this.temperature = weather.currently.temperature;
      });
  }
}
