import { ModalController, NavParams } from '@ionic/angular';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage  {
  @Input() data: string;

  constructor(private modalcc: ModalController, navParams: NavParams) { 
    console.log(navParams.get('data'));
  }

  async close() {
    await this.modalcc.dismiss();
  }
}
