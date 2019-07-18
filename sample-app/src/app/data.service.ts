import{Injectable} from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Person} from './data.model';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService{
    
    constructor(private http: HttpClient){}

    getData(gender, fname, lname, email): Observable<Person[]>{
        var url="https://";
            return this.http.get<Person[]>(url+'?gender='+gender+'&fname='+fname+'&lname='+lname+'&email='+email);
    }
}