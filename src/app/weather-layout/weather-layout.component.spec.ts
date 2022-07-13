import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLayoutComponent } from './weather-layout.component';
import {AppComponent} from "../app.component";

describe('WeatherLayoutComponent', () => {
  let component: WeatherLayoutComponent;
  let fixture: ComponentFixture<WeatherLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
