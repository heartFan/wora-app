import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http }     from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

// import { parseString } from 'xml2js'
import { DetailPage } from '../detail/detail';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  films: Observable<any>;

  constructor(
    public http:    Http,
    public navCtrl: NavController,
  ) {

  }

  ngOnInit() {
    // this.initBuptBbsRss()

    this.films = this.http.get('http://api.dagoogle.cn/news/get-news?tableNum=3&pagesize=20').map(res => res.json());

  }

  openDetails(film) {
    this.navCtrl.push(DetailPage, {film: film});
  }


}
