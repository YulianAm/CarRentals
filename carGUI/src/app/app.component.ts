import { Component } from '@angular/core';
import { NavService } from './services/nav.service';
import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car rental site!';

  constructor(public nav: NavService) { }

  ngOnInit() {
   this.nav.hide();
  }


}
