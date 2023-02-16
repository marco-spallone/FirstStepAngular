import { Component } from '@angular/core';
import { MyButtonComponent } from "./my-button/my-button-component";
import { MyButtonConfig } from "./my-button/my-button-component";
import {MyHeaders, MyTableConfig} from "./my-table/my-table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='FirstStepAngular'
  myButton = new MyButtonConfig("icona", "testo", "classe");
  header1 = new MyHeaders("label1", "key1");
  header2 = new MyHeaders("label2", "key2");
  headers:MyHeaders[] = [this.header1, this.header2];
  myTable = new MyTableConfig(this.headers);
}
