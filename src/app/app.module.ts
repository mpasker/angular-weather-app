import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { MapQuestService } from './map-quest.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService, MapQuestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
