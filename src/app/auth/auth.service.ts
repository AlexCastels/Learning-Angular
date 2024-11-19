import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    isLogged : boolean = true
    admin : boolean = true
    constructor() {}

    isAuthenticated() : boolean {
        return this.isLogged
    }

    isAdmin() : boolean {
        return this.admin
    }
}
