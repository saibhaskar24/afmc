import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.page.html',
  styleUrls: ['./screening.page.scss'],
})
export class ScreeningPage implements OnInit {
  public q1: string;

  constructor() { }

handler(event) {
    this.q1 = event.target.value;
  }
  goFish(event) {
    console.log('hello ', event.target.value);
  }

  ngOnInit() {
  }

}
