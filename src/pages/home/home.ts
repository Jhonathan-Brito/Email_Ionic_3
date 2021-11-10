import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  subject='';
  body='';
  to='';

  constructor(public navCtrl: NavController,
              private emailcomposer: EmailComposer) {

        // this.emailcomposer.isAvailable().then((available: boolean) =>{
        // if(available) {
  }

  

  enviar() {
    
    let email = {
      to: '',
      cc: '',
      bcc: [],
      attachments: [],
      subject: this.subject,
      body: this.body,
      isHtml: true,
      app: "Gmail"
      
    };
    //Envie uma mensagem de texto usando as opções padrão
    this.emailcomposer.open(email);

  }
}

