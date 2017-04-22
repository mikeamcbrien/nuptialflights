import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DataService } from '../../app/data/data.service';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DataService]
})
export class HomePage {
  public dataflights: any = null;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public dataService: DataService) {}

  ngOnInit() {
      this.dataService.getDataFlights().subscribe(data => {
        this.dataflights = data;
      });
  }

}
