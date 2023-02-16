import {Component, Input} from '@angular/core';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent {
  @Input() tableConfig!: MyTableConfig;
}

export class MyTableConfig {
  headers: MyHeaders[];
  constructor(headers: MyHeaders[]) {
    this.headers = headers;
  }
}

export class MyHeaders {
  label:string;
  key:string;
  constructor(label: string, key: string) {
    this.label = label;
    this.key = key;
  }
}
