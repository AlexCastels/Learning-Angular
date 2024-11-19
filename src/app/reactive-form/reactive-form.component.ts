import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
    form : FormGroup
    data : any = ''
    constructor() { }
    ngOnInit(): void {
        this.form = new FormGroup({
            name : new FormControl('Alex' , Validators.required),
            email : new FormControl(null , [Validators.required , Validators.email , Validators.maxLength(20)]),
            color : new FormControl(),
        })
    }
    onSubmit(){
        this.data = {
            name : this.form.value.name,
            email : this.form.value.email,
            color : this.form.value.color
        }
        console.log('I dati del mio ReactiveForm : ' + JSON.stringify(this.form.value))
        this.form.reset()
        // console.log(this.form.get('name')) //accediamo direttamente all'obj dell'input specificato
    }
}

//Per poter controllare un form tramite ts dovremo utilizzare il modulo esteso di Reactive Forms
//Questo contiene FormGroup e FormControl che si occupano di tenere traccia dei cambiamenti del modulo form puntato
//Nello specifico FormGroup è un contenitore di FormControl, questi controllano nello specifico tutti i
//cambiamenti degli input a cui sono collegati , vengono collegati tramite l'attributo FormControlName=""
//Il FormControl viene associato ad una proprietà con stesso nome dell'input e accetta diversi parametri
//il primo rappresenta il valore di default che potremmo inserire, vuoto per null
//il secondo rappresenta le opzioni di validazione dell'input, specificat in un array se più di una
//Validators è un obj che contiene i vari metodi di validazione
