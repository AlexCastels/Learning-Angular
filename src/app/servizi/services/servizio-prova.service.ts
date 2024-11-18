import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ServizioProvaService {
    constructor() {}

    utenti : any = [
        {nome : "Luca" , cognome : "Bianchi" , isOnline : true},
        {nome : "Paolo" , cognome : "Rossi" , isOnline : false},
        {nome : "Sofia" , cognome : "Lentini" , isOnline : true},
        {nome : "Giorgio" , cognome : "Alberti" , isOnline : false},
    ]

    getUsers(){
        return this.utenti
    }

    getOneUser(index : number){
        return this.utenti[index]
    }

}

//Per identificare un servizio basta osservare il decoratore @Injectable