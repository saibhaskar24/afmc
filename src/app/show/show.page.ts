import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage  {

  constructor(private modalcc: ModalController) { }

  async close() {
    await this.modalcc.dismiss();
  }
}
