import { Component } from '@angular/core';
import { MyButtonConfig } from "./my-button/my-button-component";
import {MyHeaders, MyOrder, MySearch, MyTableConfig} from "./my-table/my-table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='FirstStepAngular'
  myButton = new MyButtonConfig("icona", "testo", "classe");
  header1 = new MyHeaders("Marca", "marca");
  header2 = new MyHeaders("Modello", "modello");
  header3 = new MyHeaders("Anno", "anno");
  header4 = new MyHeaders("Cilindrata", "cilindrata");
  header5 = new MyHeaders("Cavalli", "cavalli");
  headers:MyHeaders[] = [this.header1, this.header2, this.header3, this.header4, this.header5];
  data:any[] = [{
    'marca': 'Volkswagen',
    'modello': 'Golf',
    'anno': 2021,
    'cilindrata': 1.5,
    'cavalli': 150
  },{
    'marca': 'Suzuki',
    'modello': 'Jimny',
    'anno': 2002,
    'cilindrata': 1.3,
    'cavalli': 80
  }, {
    'marca': 'Mercedes',
    'modello': 'GLC 220d',
    'anno': 2016,
    'cilindrata': 2.2,
    'cavalli': 204
  }]
  mySearch= new MySearch(["marca", "modello", "anno"]);
  myOrder = new MyOrder("anno", "asc");
  myTable = new MyTableConfig(this.headers, this.myOrder, this.mySearch);
}
