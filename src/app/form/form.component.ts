import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit{
    // @ViewChild('form') formObj : NgForm
    constructor() { }
    ngOnInit(): void {0

    }
    onSubmit(form : NgForm) : any{
        console.log(form)
    }
}

//quindi è possibile poter accedere a un elemento form creando un riferimento uguale a ngForm
//sarà possibile così collegare l'evento onSubscribe e poter passare la variabile che avrà accesso a tutte le info
//dentro la func onSubmit possiamo effettivamente accedere a tutte le informazioni contenute in un obj di tipo NgForm

//il form ha uno stato, può essere controllato grazie a ngModel, vengono aggiunte delle classi che vanno a
//tracciare i cambiamenti del form, se è stato sporcato, toccato, valido ecc, trovando classi come
//ng-dirty ng-valid- ng-touched ecc
//stessi elementi che vengono trovati anche nell'obj del form
