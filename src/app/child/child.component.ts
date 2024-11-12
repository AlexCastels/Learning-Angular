import { Component , EventEmitter, Input , OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {
	
	@Input() data : any;
	@Output() mandaDatiEvento = new EventEmitter<string>()

	toFather = 'i miei dati'

	mandaDati(){
		this.mandaDatiEvento.emit(this.toFather)
	}

	ngOnInit(): void {
		console.log(this.data);
	}
}

//dunque per poter ricevere dei dati bisognerà specificare nel componente child @Input e la variabile che poi conterrà i dati
//utilizziamo OnInit per poter mostrare i dati nel log nell'inizializzazione del componente
//i dati poi potranno essere utilizzati nel componente tramite le direttive

//Viceversa per poter mandare i dati dal padre al figlio utilizziamo @Output per poter creare un EventEmitter, dove
//andremo ad emettere un evento che manderà i dati dichiarati nel nostro comp child, in questo caso la var toFather
//dobbiamo attivamente avviare la funzione mandaDati(), in questo esempio è fatto tramite un button,
//ma sarà poi possibile utilizzarla magari in una delle fasi del ciclo di vita del componente,
//dopo aver fatto questo bisognerà ascoltare la funzione nel comp padre