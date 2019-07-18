import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { RippleModule } from 'angular-bootstrap-md/ripple';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DataService } from './data.service';
import {Observable} from 'rxjs/Rx';
import { MatInputModule, MatTableModule, MatButtonModule, MatRadioModule, MatPaginatorModule, MatSelectModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatInputModule, 
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatPaginatorModule,
    MatToolbarModule,
    MDBBootstrapModule.forRoot(),
    RippleModule.forRoot()
  ],
  exports:[
    CommonModule, MatToolbarModule, MatTableModule, MatInputModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
