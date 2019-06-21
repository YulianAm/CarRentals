import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public visible: boolean;
  public SignUp: boolean;

  constructor() { this.visible = false, this.SignUp = true; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  toggleSignUp() { this.SignUp = !this.SignUp; }

  doSomethingElseUseful() { }
}
