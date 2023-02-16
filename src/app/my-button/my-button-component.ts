import {Component, Input} from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './my-button-component.html',
  styleUrls: ['./my-button-component.css']
})
export class MyButtonComponent {
  @Input() buttonConfig!: MyButtonConfig;
}

export class MyButtonConfig {

  icon:string;
  text:string;
  cssClass:string;

  constructor(icon: string, text: string, cssClass: string) {
    this.icon = icon;
    this.text = text;
    this.cssClass = cssClass;
  }
}
