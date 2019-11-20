import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.page.html',
  styleUrls: ['./expert.page.scss'],
})
export class ExpertPage {

  constructor(public alertcontroller: AlertController) { }

}
