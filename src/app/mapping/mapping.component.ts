import { Component } from '@angular/core';

@Component({
    selector: 'app-mapping',
    templateUrl: './mapping.component.html',
    styleUrl: './mapping.component.css',
})

// interface obj {
//     nome :string ,
//     cognome : string ,
//     isOnline : boolean
// }

export class MappingComponent {
    utenti : any = [
        {nome : "Luca" , cognome : "Bianchi" , isOnline : true},
        {nome : "Paolo" , cognome : "Rossi" , isOnline : false},
        {nome : "Sofia" , cognome : "Lentini" , isOnline : true},
        {nome : "Giorgio" , cognome : "Alberti" , isOnline : false},
    ]
}
