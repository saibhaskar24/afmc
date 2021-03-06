import { ShowPage } from './../show/show.page';
import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.page.html',
  styleUrls: ['./screening.page.scss'],
})
export class ScreeningPage  {
  age;
  antibiotic;
  public q1: string;
  public a1: string;
public aa: boolean = false;
public aaa1: boolean = false;
public bbb1: boolean = false;
public ccc1: boolean = false;
public bb11: boolean = false;
public g: boolean = false;
public bby6: boolean = false;
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
public e: string;


  constructor(public modalC:ModalController, public alertcontroller: AlertController) { }

  async presentModal(r) {
    const modal = await this.modalC.create({
      component: ShowPage,
      componentProps : {
        'data' : r
      }
    });
     await modal.present();
  }

  async presentAlert(st) {
    const alert = await this.alertcontroller.create({
      header: 'Result',
      subHeader: 'Based on your options result is',
      message:st,
      buttons:['OK']
    });
    await alert.present();
  }

  aa1(event) {this.a1 = event.target.value; if(this.a1=="1") this.g=true; else this.g=false;} //gender
  aa2(event) {this.a3 = event.target.value; if(this.a3=="1") {this.aaa1=true;}} //yes
  aa3(event) {this.a4 = event.target.value; if(this.a4=="1") this.bbb1=true;} //.
  aa4(event) {this.a5 = event.target.value; if(this.a5=="1") this.ccc1=true;} //.[1,0]
  next() {if(this.a3 == "1" || this.a4 == "1" || this.a5=="1") {this.aa=true;} else {this.aa=false; this.presentAlert("Thanks you dont have any problems");} }

  bb1(event) {this.b1 = event.target.value; if(this.b1=="1") {this.bb11=true;} else {this.presentAlert("Low risk of STD"); this.bb11=false;} } 
  bb2(event) {this.b2 = event.target.value; } 
  bb3(event) {this.b3 = event.target.value; } //record
  bb4(event) {this.b4 = event.target.value; } //record,female
  bb5(event) {this.b5 = event.target.value;  } //con
  bb6(event) {this.b6 = event.target.value; if(this.b6=="1"){this.bby6=true; }} //yes->input
  bb7(event) {this.b7 = event.target.value; } //sea
  cc1(event) {this.c1 = event.target.value; } //a -> yes reponse for a,b only with or without c,d,j,k indicates UTI
  cc2(event) {this.c2 = event.target.value; } //b -> yes response to e with any response to f indicates gonorrhoea 
  cc3(event) {this.c3 = event.target.value; } //c -> yes response to j and k indicates pelvic inflammatory disease
  cc4(event) {this.c4 = event.target.value; } //d ->  A clear and watery discharge is perfectly normal
  cc5(event) {this.c5 = event.target.value; } //e -> Clear and stretchy(mucoid) discharge indicates that you are likely ovulating
  cc6(event) {this.c6 = event.target.value; } //f -> Thick white/curdy discharge of cottage cheese-like consistency accompanied with itching indicates yeast/candida infection
  cc7(event) {this.c7 = event.target.value;  }
  cc8(event) {this.c8 = event.target.value; } //h
  cc9(event) {this.c9 = event.target.value; } //i
  cc10(event) {this.c10 = event.target.value; } //j
  cc11(event) {this.c11 = event.target.value; } //k
  cc12(event) {this.c12 = event.target.value; } //l

  dd1(event) {this.d1 = event.target.value; } //a
  dd2(event) {this.d2 = event.target.value; } //b
  dd3(event) {this.d3 = event.target.value; } //c
  ee(event) {this.e = event.target.value; } 
  submit() {
    var result:string[] = new Array(13) ;
    var i=0;
    if(this.g)     result[i++] = "Gender : "+"Male";
    else      result[i++] = "Gender : "+"Female";
    result[i++] = "Age : "+this.age;
    result[i++] = "Sexual orientation : "+this.b3;
    if(!this.g) {
      result[i++] = "The possibility of pregnancy (females): "+this.b4;
    }
    var a = 0;
    if(this.b7=="1" || this.b2=="2" || this.b2=="3") { result[i++] ="High risk of STD"; a=1; }
    if(a!=0 && (this.b5=="2" || this.b2=="1")) {result[i++] ="Low risk of STD";}
    if(this.bby6)     result[i++] = "Recent antibiotic history and drug allergy  : "+this.antibiotic;
    if(this.aaa1)     {
    if(this.c7=="1" ) result[i++] = " A clear and watery discharge is perfectly normal";
    if(this.c7=="2" ) result[i++] = " Clear and stretchy(mucoid) discharge indicates that you are likely ovulating";
    if(this.c7=="3" ) result[i++] = " Thick white/curdy discharge of cottage cheese-like consistency accompanied with itching indicates yeast/candida infection";
    if(this.c7=="4" ) result[i++] = " Thick yellowish to greenish foul smelling bubbly/frothy discharge indicates trichomoniasis";
    if(this.c1=="1" && this.c2=="1" && this.c3=="0"&&this.c4=="0" &&this.c10=="0" && this.c11=="0") result[i++] = "UTI";
    if(this.c5=="1" && (this.c6=="1" || this.c6=="0")) result[i++] = "Gonorrhoea";
    if(this.c10=="1" && this.c11=="1") result[i++]="Pelvic inflammatory disease";
    if(!this.g){if(this.c8=="1") result[i++]="Trichomoniasis    ";
    if(this.c9=="1") result[i++]=" Candidiasis    ";
    if(this.c10=="1" || this.c11=="1") result[i++]="Pelvic inflammatory Disease    ";
    if(this.c12=="1") result[i++]=" Treatment of partner is also required    ";}
  }

    if(this.bbb1) {
      result[i++]=" Common causes of Genital Ulcer: treponema pallidum, H. ducreyi, Herpes Simplex infection";
      if(this.d1=="0") {
        result[i++]=" Painless ulcer is seen in syphilis ";
      }
      else {
        result[i++]=" Painful ulcer is seen in chancroid        ";
        if(this.d3=="1") {
          result[i++]=" Painful multiple pin point ulcers indicates Herpes infection   ";
        }
      }
    }

    if(this.ccc1) {
      if(this.e=="1")  result[i++]=" Syphilitic ulcer   ";
      if(this.e=="2")  result[i++]=" Chancroid  ";
      if(this.e=="3")  result[i++]="  Herpetic ulcer      ";          
    }
    this.presentModal(result);
  }

}
