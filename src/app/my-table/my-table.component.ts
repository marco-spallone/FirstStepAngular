import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {addButtonConfig, editButtonConfig} from "../my-button/config/button-config";
import {deleteButtonConfig} from "../my-button/config/button-config";

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
  column!:string;
  @Output() newItemEvent = new EventEmitter<string>();
  addButtonConfig=addButtonConfig;
  editButtonConfig=editButtonConfig;
  deleteButtonConfig=deleteButtonConfig;



  ngOnInit() {
    this.order=this.tableConfig.order.orderType;
    this.filtered=this.data;
    this.sort(this.tableConfig.order.defaultColumn);
  }

  getEvent(event:string){
    this.newItemEvent.emit(event);
  }

  sort(column: string){
    this.column=column;
    if(this.order==='desc'){
      this.order='asc';
    } else {
      this.order='desc';
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
  actions: MyTableActionsEnum[];

  constructor(headers: MyHeaders[], order: MyOrder, search: MySearch, pagination: MyPagination, actions:MyTableActionsEnum[]) {
    this.headers = headers;
    this.order = order;
    this.search = search;
    this.pagination=pagination;
    this.actions=actions;
  }
}

export enum MyTableActionsEnum{
  NEW_ROW, EDIT, DELETE
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
