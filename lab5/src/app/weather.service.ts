import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey='212dde1907e661ffc30a58775a88a115';

  constructor(private http:HttpClient) {   }

  getWeather(city: string){
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=212dde1907e661ffc30a58775a88a115`);
  }
}
