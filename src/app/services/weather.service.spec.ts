import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import {WeatherData} from "../models/weather.model";

describe('WeatherService', () => {
  let service: WeatherService;
  const weatherDetails: WeatherData = {
    coord: {
      lon: 5.25,
      lat: 52
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d"
      }
    ],
    base: "stations",
    main: {
      temp: 27.78,
      feels_like: 28.05,
      temp_min: 24.41,
      temp_max: 29.45,
      pressure: 1019,
      humidity: 48
    },
    visibility: 10000,
    wind: {
      speed: 3.58,
      deg: 281,
    },
    clouds: {
      all: 63
    },
    dt: 1657714017,
    sys: {
      type: 2,
      id: 2011892,
      country: "NL",
      sunrise: 1657683255,
      sunset: 1657742086
    },
    timezone: 7200,
    id: 2745909,
    name: "Provincie Utrecht",
    cod: 200
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get response from weather api', () => {
    let response = service.getWeatherData('Utrecht');
    expect(response).toBeDefined();
  });
});
