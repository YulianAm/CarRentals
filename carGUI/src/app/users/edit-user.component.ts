import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(public nav: NavService) { }

  ngOnInit() { //this.nav.hide();
  }

}
