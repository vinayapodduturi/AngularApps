import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import {Person} from './data.model';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { merge } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  displayedColumns = ['Name', 'Phone', 'Address', 'EmailID', 'EmployeeID', 'Department'];
  dataSource;
  public gender = 1;
  public fname;
  public lname;
  public email;
  public dataLength : any;
  constructor(private dataService:DataService){}

  updateGender(g){
    if(g.value == 1){
      this.gender = g.value;
    }else{
      this.gender = g.value;
    }
  }
 
 
  ngOnInit(){
    //this.getData();
  }
  submit(){

    
    console.log(this.gender, this.fname, this.lname, this.email);
    this.dataService.getData(this.gender, this.fname, this.lname, this.email).subscribe(
      data => {this.dataLength = data; this.dataSource  = new personDataSource(this.dataService, this.gender, this.fname, this.lname, this.email, this.dataLength);
      })
    
  }
}

export class personDataSource extends DataSource<any>{
  public gender;
  public fname;
  public lname;
  public email;
  PersonData : any;
  constructor(private dataService: DataService, gender, fname, lname, email, dataLength){
    super();
    this.gender = gender;
    this.fname = fname;
    this.lname = lname;
    this.email = email;

  }
  connect(): Observable<Person[]>{

      return this.dataService.getData(this.gender, this.fname, this.lname, this.email);
  }
  disconnect(){}
}