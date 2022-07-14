import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-weather-layout',
  templateUrl: './weather-layout.component.html',
  styleUrls: ['./weather-layout.component.scss'],
})
export class WeatherLayoutComponent implements OnInit {
  city: string ='Utrecht';
  weatherData?: WeatherData;
  hasError: boolean = false;

  constructor(private weatherService: WeatherService)
  {}

  ngOnInit(): void {
    this.getWeatherData(this.city);
  }
  onSubmit(form: NgForm) {
    this.getWeatherData(this.city);
    this.city='';
    this.hasError = false;
  }
  private getWeatherData(city: string) {
    this.weatherService.getWeatherData(city).subscribe(
      (response) =>
        this.weatherData = response,
      error =>
        this.hasError = true,
    );
  }
}
