import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.page.html',
  styleUrls: ['./screening.page.scss'],
})
export class ScreeningPage  {
  public q1: string;
  public a1: string;
public a2: string;
public a3: string;
public a4: string;
public a5: string;
public b1: string;
public b2: string;
public b3: string;
public b4: string;
public b5: string;
public b6: string;
public b7: string;
public c1: string;
public c2: string;
public c3: string;
public c4: string;
public c5: string;
public c6: string;
public c7: string;
public c8: string;
public c9: string;
public c10: string;
public c11: string;
public c12: string;
public d1: string;
public d2: string;
public d3: string;

  constructor() { }

handler(event) {this.q1 = event.target.value; }
  goFish(event) {
    console.log('hello ', event.target.value);
  }
  aa1(event) {this.a1 = event.target.value; }
  aa2(event) {this.a2 = event.target.value; }
  aa3(event) {this.a3 = event.target.value; }
  aa4(event) {this.a4 = event.target.value; }
  aa5(event) {this.a5 = event.target.value; }
  bb1(event) {this.b1 = event.target.value; }
  bb2(event) {this.b2 = event.target.value; }
  bb3(event) {this.b3 = event.target.value; }
  bb4(event) {this.b4 = event.target.value; }
  bb5(event) {this.b5 = event.target.value; }
  bb6(event) {this.b6 = event.target.value; }
  bb7(event) {this.b7 = event.target.value; }
  cc1(event) {this.c1 = event.target.value; }
  cc2(event) {this.c2 = event.target.value; }
  cc3(event) {this.c3 = event.target.value; }
  cc4(event) {this.c4 = event.target.value; }
  cc5(event) {this.c5 = event.target.value; }
  cc6(event) {this.c6 = event.target.value; }
  cc7(event) {this.c7 = event.target.value; }
  cc8(event) {this.c8 = event.target.value; }
  cc9(event) {this.c9 = event.target.value; }
  cc10(event) {this.c10 = event.target.value; }
  cc11(event) {this.c11 = event.target.value; }
  cc12(event) {this.c12 = event.target.value; }
  dd1(event) {this.d1 = event.target.value; }
  dd2(event) {this.d2 = event.target.value; }
  dd3(event) {this.d3 = event.target.value; }

}
