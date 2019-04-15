import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(http:HttpClient) {
    super(http);
   }
}
