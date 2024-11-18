import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
})

export class AboutComponent implements OnInit{
    data :  any

    constructor(private route: ActivatedRoute, private router: Router) {}
    
    ngOnInit(): void {
        this.data = this.route.queryParamMap.subscribe(params => {
            this.data = params.get('data')
            console.log(this.data);
        })   
    }

    handleNavigate() {
        this.router.navigate(['/home'] , {queryParams : {data : 'I miei dati passati tramite path da About!'}});
    }

}
