import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DataService {
    url : string = 'https://jsonplaceholder.typicode.com/users'
    constructor(private http : HttpClient) { }

    post(url : string , body : any){
        return this.http.post(url , body)
    }
    getData(url : string){
        return this.http.get(url)
    }

}
