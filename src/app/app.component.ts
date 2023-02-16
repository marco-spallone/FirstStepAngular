import { Component } from '@angular/core';
import { MyButtonComponent } from "./my-button/my-button-component";
import { MyButtonConfig } from "./my-button/my-button-component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='FirstStepAngular'
  myButton = new MyButtonConfig("icona", "testo", "classe");
}
