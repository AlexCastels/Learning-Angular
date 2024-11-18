import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})

export class HomeComponent {
    data : any

    constructor(private route : ActivatedRoute , private router : Router) {}

    ngOnInit(): void {
        this.data = this.route.queryParamMap.subscribe(params => {
            this.data = params.get('data')
            console.log(this.data);
        })   
    }

    handleNavigate(){
        this.router.navigate(['/about'] , {queryParams : {data : 'I miei dati passati tramite path da home!'}})
    }
}
