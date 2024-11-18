import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../servizi/services/servizio-prova.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-contatti',
    templateUrl: './contatti.component.html',
    styleUrl: './contatti.component.css',
})
export class ContattiComponent implements OnInit {
    constructor(private userService : ServizioProvaService , private route : ActivatedRoute){}
    //per poter accedere alla route in generelae usiamo la classe ActivateRoute
    //per recuperare l'id dobbiamo accedere alle sezioni di questo obj che ci ritorna
    id = this.route.snapshot.paramMap.get('id')

    users = this.userService.getUsers()

    user = this.userService.getOneUser(Number(this.id))

    ngOnInit(): void {
        console.log(this.id);

    }
}
