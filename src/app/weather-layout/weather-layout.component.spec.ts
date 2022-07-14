import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherLayoutComponent } from './weather-layout.component';
import {WeatherService} from "../services/weather.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule} from "@angular/forms";

describe('WeatherLayoutComponent', () => {
  let component: WeatherLayoutComponent;
  let fixture: ComponentFixture<WeatherLayoutComponent>;
  let mockweatherService: Partial<WeatherService>;
  let el: HTMLElement;

  let weatherDetails:
    { visibility: number; timezone: number; main: { temp: number; temp_min: number; humidity: number; pressure: number; feels_like: number; temp_max: number }; clouds: { all: number }; sys: { country: string; sunrise: number; sunset: number; id: number; type: number }; dt: number; coord: { lon: number; lat: number }; weather: { icon: string; description: string; main: string; id: number }[]; name: string; cod: number; id: number; base: string; wind: { deg: number; speed: number } }[];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, FormsModule
      ],
      declarations: [ WeatherLayoutComponent ],
      providers: [ { provide: mockweatherService, useValue: weatherDetails }, HttpClientTestingModule ],
    });
    fixture = TestBed.createComponent(WeatherLayoutComponent);
    component    = fixture.componentInstance;

    // WeatherService from the root injector
    mockweatherService = TestBed.inject(WeatherService);

    //  get the "form" element by CSS selector
    el = fixture.nativeElement.querySelector('#form');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
