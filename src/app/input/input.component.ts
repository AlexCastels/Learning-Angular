import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [FormsModule, MatFormFieldModule, MatInputModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.css',
})

export class InputComponent {
    
    data : string = ''

    handleInput(e : Event){      
        this.data = (<HTMLInputElement>e.target).value  
        console.log(this.data);
    }
    
}

//Angular funziona solamente tramite typescript, per poter passare l'evento dall'element html alla classe comp
//bisognerà inserire ($event) come argomento della funzione nell'input HTML.
//nel metodo della classe l'evento sarà di tipo Event (tipo in Angular)
//e.target.value non è direttamente associabile al tipo Event, typescript non riconosce di che tipo è l'evento, il target
//dunque noi castiamo il target associato all'evento attraverso <> , il value sarà riconosciuto poi nel tipo Event
