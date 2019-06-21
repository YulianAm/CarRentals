import { Component, OnInit } from '@angular/core';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public nav: NavService) { }

  ngOnInit() { //this.nav.show();
  }

}
