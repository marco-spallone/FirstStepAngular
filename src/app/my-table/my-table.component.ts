import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent implements OnInit{
  @Input() tableConfig!: MyTableConfig;
  @Input() data!:any;
  startHeader:MyHeaders;
  order:string;

  constructor() {
    this.order="asc";
    this.startHeader = new MyHeaders("Marca", "marca");
  }

  ngOnInit() {
    this.sort(this.startHeader);
  }

  sort(header: MyHeaders){
    if(this.order==="asc"){
      this.order="desc";
      this.data.sort((a:any, b:any) => {
        if(a[header.key]>b[header.key]) {
          return 1;
        }
        if(a[header.key]<b[header.key]) {
          return -1;
        }
        else{
          return 0;
        }
      })
    } else {
      this.order="asc";
      this.data.sort((a:any, b:any) => {
        if(a[header.key]>b[header.key]) {
          return -1;
        }
        if(a[header.key]<b[header.key]) {
          return 1;
        }
        else{
          return 0;
        }
      })
    }
  }

}

export class MyTableConfig{
  headers: MyHeaders[];
  order: MyOrder;

  constructor(headers: MyHeaders[], order: MyOrder) {
    this.headers = headers;
    this.order = order;
  }

}

export class MyOrder{
  defaultColumn:string;
  orderType:string;

  constructor(defaultColumn: string, orderType: string) {
    this.defaultColumn = defaultColumn;
    this.orderType = orderType;
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
