import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableSortComponent } from './mat-table-sort/mat-table-sort.component';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [AppComponent, MatTableSortComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialComponentsModule,
    BrowserAnimationsModule,
    CdkTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
