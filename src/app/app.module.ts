import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { CollegeService } from './college.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AgGridModule.withComponents([])
  ],
  providers: [CollegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
