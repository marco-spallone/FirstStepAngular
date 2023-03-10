import { Component } from '@angular/core';
import {carTableConfig} from "./my-table/config/table-config";
import {addButtonConfig} from "./my-button/config/button-config";
import {MyTableActionsEnum} from "./my-table/my-table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='FirstStepAngular'
  data:any[] = [{
    marca: 'Volkswagen',
    modello: 'Golf',
    anno: 2021,
    cilindrata: 1.5,
    cavalli: 150
  },{
    marca: 'Suzuki',
    modello: 'Jimny',
    anno: 2002,
    cilindrata: 1.3,
    cavalli: 80
  }, {
    marca: 'Mercedes',
    modello: 'GLC 220d',
    anno: 2016,
    cilindrata: 2.2,
    cavalli: 204
  }, {
    marca: 'Fiat',
    modello: 'Panda',
    anno: 1990,
    cilindrata: 1.0,
    cavalli: 60
  }, {
    marca: 'Ford',
    modello: 'Fiesta',
    anno: 2011,
    cilindrata: 1.2,
    cavalli: 75
  }, {
    marca: 'Renault',
    modello: 'Clio',
    anno: 2014,
    cilindrata: 1.4,
    cavalli: 75
  }, {
    marca: 'Audi',
    modello: 'A3',
    anno: 2017,
    cilindrata: 1.6,
    cavalli: 115
  }, {
    marca: 'Chrysler',
    modello: 'Voyager',
    anno: 2001,
    cilindrata: 1.9,
    cavalli: 170
  }, {
    marca: 'BMW',
    modello: '116d',
    anno: 2019,
    cilindrata: 1.6,
    cavalli: 116
  }, {
    marca: 'Audi',
    modello: 'A4',
    anno: 2007,
    cilindrata: 2.0,
    cavalli: 170
  }, {
    marca: 'Volkswagen',
    modello: 'Polo',
    anno: 2014,
    cilindrata: 1.4,
    cavalli: 75
  }, {
    marca: 'Mercedes',
    modello: 'A 220d',
    anno: 2020,
    cilindrata: 1.8,
    cavalli: 115
  }]
  addButton = addButtonConfig;
  myTable = carTableConfig;

  addItem(data:any, action:MyTableActionsEnum) {
    console.log({data:data, action:action});
  }
}
