import { Component } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrl: './input.component.css',
})

export class InputComponent {
    
    data : string = 'valore di default'

    handleInput(e : Event){      
        this.data = (<HTMLInputElement>e.target).value  
        console.log(this.data);
    }

    handleBtn(){
        this.data = ''
        console.log(this.data);        
    }
    
}

//Angular funziona solamente tramite typescript, per poter passare l'evento dall'element html alla classe comp
//bisognerà inserire ($event) come argomento della funzione nell'input HTML.
//nel metodo della classe l'evento sarà di tipo Event (tipo in Angular)
//e.target.value non è direttamente associabile al tipo Event, typescript non riconosce di che tipo è l'evento, il target
//dunque noi castiamo il target associato all'evento attraverso <> , il value sarà riconosciuto poi nel tipo Event
