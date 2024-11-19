import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild,
    MaybeAsync, GuardResult
} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root',
})

export class AuthGuard implements CanActivate , CanActivateChild{

    constructor(private router: Router , private authService : AuthService) {}

    canActivate(
        route: ActivatedRouteSnapshot, //tiene traccia della route e del suo stato
        state: RouterStateSnapshot
    ) : any {
        return this.authService.isAuthenticated()
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : MaybeAsync<GuardResult> {
        return this.authService.isAdmin();
    }
}



