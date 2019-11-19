import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.page.html',
  styleUrls: ['./expert.page.scss'],
})
export class ExpertPage implements OnInit {

  constructor(public alertcontroller: AlertController) { }

  async presentAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Result',
      subHeader: 'Based on your options result is',
      message:'gfgjh',
      buttons:['OK']
    });
    await alert.present();
  }

  ngOnInit() {
    this.presentAlert();
  }

}
