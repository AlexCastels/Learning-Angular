import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ServizioProvaService } from '../servizi/services/servizio-prova.service';

@Component({
    selector: 'app-prova',
    templateUrl: './prova.component.html',
    styleUrl: './prova.component.css',
})

export class ProvaComponent implements OnInit , AfterContentChecked , AfterContentInit , AfterViewChecked , AfterViewInit , DoCheck , OnDestroy {

    cani = [
        {
            nome : 'roger',
            razza : 'golden',
            desc : `The Golden is a Mexican breed of toy dog. It is named for the
            Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
            usually kept as a companion animal or for showing.`
        } ,
        {
            nome : 'luky',
            razza : 'retriever',
            desc : `The Retriever is a Mexican breed of toy dog. It is named for the
            Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
            usually kept as a companion animal or for showing.`
        } ,
    ]

    longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
    Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
    usually kept as a companion animal or for showing.`;

    constructor(public serviceUser : ServizioProvaService) {}
    ngOnInit(): void {
        //console.log(this.serviceUser.getUsers());
    }
    ngAfterContentChecked(): void {
        // console.log('ngAfterContentChecked');
    }
    ngAfterContentInit(): void {
        // console.log('ngAfterContentInit');
    }
    ngAfterViewChecked(): void {
        // console.log('ngAfterViewChecked');
    }
    ngAfterViewInit(): void {
        // console.log('ngAfterViewInit');
    }
    ngDoCheck(): void {
        // console.log('ngDoCheck');
    }
    ngOnDestroy(): void {
        // console.log('ngOnDestroy');
    }
}
