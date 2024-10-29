import { Component , Input , OnInit } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit {
	@Input() data : any;

	ngOnInit(): void {
		console.log(this.data);
	}
}

//dunque per poter ricevere dei dati bisognerà specificare nel componente child @Input e la variabile che poi conterrà i dati

//utilizziamo OnInit per poter mostrare i dati nel log nell'inizializzazione del componente

//i dati poi potranno essere utilizzati nel componente tramite le direttive
