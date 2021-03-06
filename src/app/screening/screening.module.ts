import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ScreeningPageRoutingModule } from './screening-routing.module';
import { ScreeningPage } from './screening.page';
import {ShowPageModule} from '../show/show.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreeningPageRoutingModule,
    ShowPageModule,
  ],
  declarations: [ScreeningPage]

})
export class ScreeningPageModule {}
