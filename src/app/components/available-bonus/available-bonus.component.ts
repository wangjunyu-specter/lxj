import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {HttpService} from "../../services/http.service";
import {BounslistService} from "../../services/bounslist.service";

@Component({
  selector: 'app-available-bonus',
  templateUrl: './available-bonus.component.html',
  styleUrls: ['./available-bonus.component.scss'],
})
export class AvailableBonusComponent implements OnInit {
  @Input() list: object[] = [];

  constructor(public modalController: ModalController, private http: HttpService, private bonusfn: BounslistService) { }

  ngOnInit() {}
  close() {
    this.modalController.dismiss();
  }
  getBonus(id) {
    this.http.getData(this.http.getbonus, {id}).subscribe(res => {
      console.log(res);
      this.bonusfn.resetList();
    }, error2 => {})
  }
}
