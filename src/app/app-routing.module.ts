import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeatherLayoutComponent} from "./weather-layout/weather-layout.component";

const routes: Routes = [
  {path:'',component:WeatherLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
