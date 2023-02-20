import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button-component';
import { MyTableComponent} from './my-table/my-table.component';
import {FormsModule} from "@angular/forms";
import { PaginationPipe } from './pipes/pagination.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyTableComponent,
    PaginationPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
