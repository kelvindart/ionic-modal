import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {ModalPage} from '../modal/modal';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public modalCtrl: ModalController) {

  }

  ionViewDidEnter() {
    this.showModal();
  }

  showModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

}
