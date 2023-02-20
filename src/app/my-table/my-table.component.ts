import {Component, Input, OnInit, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent implements OnInit{
  @Input() tableConfig!: MyTableConfig;
  @Input() data!:any;
  order!: string;
  filtered:any[]=[];
  page:number=1;


  ngOnInit() {
    this.order=this.tableConfig.order.orderType;
    this.sort(this.tableConfig.order.defaultColumn);
    this.filtered=this.data;
  }

  sort(column: string){
    if(this.order==="asc"){
      this.order="desc";
      this.data.sort((a:any, b:any) => {
        if(a[column]>b[column]) {
          return 1;
        }
        if(a[column]<b[column]) {
          return -1;
        }
        else{
          return 0;
        }
      })
    } else {
      this.order="asc";
      this.data.sort((a:any, b:any) => {
        if(a[column]>b[column]) {
          return -1;
        }
        if(a[column]<b[column]) {
          return 1;
        }
        else{
          return 0;
        }
      })
    }
  }

  applyFilter(searchFor:string, searchValue:string){
    this.filtered = this.data.filter((i:any) => i[searchFor.toLowerCase()].toString().toLowerCase().includes(searchValue.toLowerCase()))
  }
  clearFilter(searchFor:string, searchValue:string){
    this.filtered = this.data.filter((i:any) => i[searchFor.toString().toLowerCase()].toString().toLowerCase().includes(searchValue.toLowerCase()))
  }
  next(){
    this.page++;
  }
  prev(){
    this.page--;
  }
}

export class MyTableConfig{
  headers: MyHeaders[];
  order: MyOrder;
  search:MySearch;
  pagination: MyPagination;

  constructor(headers: MyHeaders[], order: MyOrder, search: MySearch, pagination: MyPagination) {
    this.headers = headers;
    this.order = order;
    this.search = search;
    this.pagination=pagination;
  }
}

export class MyPagination{
  itemPerPage:number;
  itemPerPageOptions:number[];

  constructor(itemPerPage: number, itemPerPageOptions: number[]) {
    this.itemPerPage = itemPerPage;
    this.itemPerPageOptions = itemPerPageOptions;
  }
}

export class MySearch{
  columns:string[];
  constructor(columns: string[]) {
    this.columns = columns;
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
