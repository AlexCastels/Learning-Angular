import {Component} from '@angular/core';
import {DataService} from "../servizi/data/data.service";


@Component({
  selector: 'app-handle-data',
  templateUrl: './handle-data.component.html',
  styleUrl: './handle-data.component.css'
})
export class HandleDataComponent{

    url : string = ''
    data : any = ''
    message : any = ''
    constructor(private dataService : DataService) {
        this.url = dataService.url
        this.data = dataService.getData(this.url)
    }

    handlePost(){
        this.dataService.post(this.url , {
            method: 'POST',
            body: JSON.stringify({
                name: 'alex',
                email: 'alex@gmail.com',
            }),
            headers: {
                'Content-type': 'application/json',
            },
        }).subscribe({
            next : (response) => {
                console.log(response)
                this.data = ''
                this.message = 'Richiesta POST effettuata con successo'
            } ,
            error: (err) => {
                console.log('Errore nella richiesta POST' , err)
            }
        })

    }

    handleGet(){
        //this.dataService.getData(this.url).subscribe(data => console.log(data))
        this.dataService.getData(this.url).subscribe({
            next : (response) => {
                console.log(response) ;
                this.data = response
            } ,
            error: (err) => {
                console.log('Errore nella chiamata GET: ' , err)
            }
        })
    }
}
