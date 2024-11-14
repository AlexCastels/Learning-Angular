import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from '../services/servizio-prova.service';

@Component({
    selector: 'app-singolo-contatto',
    templateUrl: './singolo-contatto.component.html',
    styleUrl: './singolo-contatto.component.css',
})
export class SingoloContattoComponent implements OnInit {
    // @Input() user : any
    id : any;
    user : any;

    constructor(private route : ActivatedRoute , private service : ServizioProvaService) {}
    
    ngOnInit(): void {
        this.route.paramMap.subscribe((params : ParamMap) => {
            this.id = params.get('id')
            this.user = this.service.getOneUser(Number(this.id))
        })
    }
}

//il subscribe tiene traccia del cambiamento del path e dei suoi parametri, al suo interno devono essere
//specificati i cambiamenti e le funzioni che terranno traccia di questi cambiamenti, permettendo di avere
//a video dati sempre aggiornati

//se la funzione getOneUser() fosse messa fuori dallo scope, gli elementi non sarebbero aggiornati ma solo visti
//al primo caricamento del dato, questo perchè tutti i parametri sono async
