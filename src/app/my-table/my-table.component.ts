import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {addButtonConfig, editButtonConfig} from "../my-button/config/button-config";
import {deleteButtonConfig, prevButtonConfig, nextButtonConfig} from "../my-button/config/button-config";
import {MyButtonConfig} from "../my-button/my-button-component";

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent implements OnInit {
  @Input() tableConfig!: MyTableConfig;
  @Input() data!: any;
  order!: string;
  filtered: any[] = [];
  page: number = 1;
  column!: string;
  @Output() newItemEvent = new EventEmitter<any>();
  standardButtonConfig!:MyButtonConfig;
  addButtonConfig = addButtonConfig;
  editButtonConfig = editButtonConfig;
  deleteButtonConfig = deleteButtonConfig;
  prevButtonConfig = prevButtonConfig;
  nextButtonConfig = nextButtonConfig;
  enum = MyTableActionsEnum;
  maxPages!:number;
  iterableMaxPages!:Array<any>;


  ngOnInit() {
    this.order = this.tableConfig.order.orderType;
    this.filtered = this.data;
    this.sort(this.tableConfig.order.defaultColumn);
    this.onItemPerPageChange()
  }

  onItemPerPageChange(){
    this.maxPages=this.data.length/this.tableConfig.pagination.itemPerPage;
    if(this.maxPages%1===0){
      this.iterableMaxPages = new Array(Math.floor(this.maxPages)).fill(this.maxPages).map((x,i)=>i);
    } else {
      this.iterableMaxPages = new Array(Math.floor(this.maxPages)+1).fill(this.maxPages).map((x,i)=>i);
    }
    this.page=1;
  }

  setPageButton(page:number):MyButtonConfig{
    if(this.page-1===page){
      this.standardButtonConfig = new MyButtonConfig('', (page+1).toString(), 'active mt-3 btn btn-outline-warning');
    } else {
      this.standardButtonConfig = new MyButtonConfig('', (page+1).toString(), 'mt-3 btn btn-outline-warning');
    }
    return this.standardButtonConfig;
  }

  setPage(page:number){
    this.page=page+1;
  }

  getEvent(data: any, action: MyTableActionsEnum) {
    this.newItemEvent.emit({data: data, action: action});
  }

  sort(column: string) {
    this.column = column;
    this.page=1;
    if (this.order === 'desc') {
      this.order = 'asc';
    } else {
      this.order = 'desc';
    }
  }

  applyFilter(searchFor: string, searchValue: string) {
    this.page=1;
    this.filtered = this.data.filter((i: any) => i[searchFor.toLowerCase()].toString().toLowerCase().includes(searchValue.toLowerCase()))
  }

  next() {
    if(this.page<this.maxPages){
      this.page++;
    }
  }

  prev() {
    if(this.page>1){
      this.page--;
    }
  }
}

export class MyTableConfig {
  headers: MyHeaders[];
  order: MyOrder;
  search: MySearch;
  pagination: MyPagination;
  actions: MyTableActionsEnum[];

  constructor(headers: MyHeaders[], order: MyOrder, search: MySearch, pagination: MyPagination, actions: MyTableActionsEnum[]) {
    this.headers = headers;
    this.order = order;
    this.search = search;
    this.pagination = pagination;
    this.actions = actions;
  }
}

export enum MyTableActionsEnum {
  NEW_ROW = 'NEW_ROW',
  EDIT = 'EDIT',
  DELETE = 'DELETE'
}

export class MyPagination {
  itemPerPage: number;
  itemPerPageOptions: number[];

  constructor(itemPerPage: number, itemPerPageOptions: number[]) {
    this.itemPerPage = itemPerPage;
    this.itemPerPageOptions = itemPerPageOptions;
  }
}

export class MySearch {
  columns: string[];

  constructor(columns: string[]) {
    this.columns = columns;
  }
}

export class MyOrder {
  defaultColumn: string;
  orderType: string;

  constructor(defaultColumn: string, orderType: string) {
    this.defaultColumn = defaultColumn;
    this.orderType = orderType;
  }
}

export class MyHeaders {
  label: string;
  key: string;

  constructor(label: string, key: string) {
    this.label = label;
    this.key = key;
  }
}
