import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public images: string[] = [
    'assets/images/car-6.jpg',
    'assets/images/car-9.jpg',
    'assets/images/car-10.jpg',
    'assets/images/car-11.jpg',
    'assets/images/car-12.jpg',
    'assets/images/car-13.jpg',
    'assets/images/car-14.jpg',
    'assets/images/car-1.jpg',
    'assets/images/car-3.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
