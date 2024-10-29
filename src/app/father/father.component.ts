import { Component } from '@angular/core';

@Component({
    selector: 'app-father',
    templateUrl: './father.component.html',
    styleUrl: './father.component.css',
})
export class FatherComponent {
	utenti : any = [
        {nome : "Luca" , cognome : "Bianchi" , isOnline : true},
        {nome : "Paolo" , cognome : "Rossi" , isOnline : false},
        {nome : "Sofia" , cognome : "Lentini" , isOnline : true},
        {nome : "Giorgio" , cognome : "Alberti" , isOnline : false},
    ]
}
