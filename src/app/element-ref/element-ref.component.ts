import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-element-ref',
    templateUrl: './element-ref.component.html',
    styleUrl: './element-ref.component.css',
})
export class ElementRefComponent {
    
    @ViewChild('riferimento') inputRef !: ElementRef<HTMLInputElement>
    
    value : string = ''

    onClick(){
        console.log(this.inputRef)
        this.value = this.inputRef.nativeElement.value
    }
}

//per poter creare un riferimento dunque utilizzaimo #nomeVariabile, conterrà un obj con tutti i dati relativi all'elem
//per poter accedere a questi dati utilizziamo il decoratore @ViewChild per poter salvare il valore in una variabile
//il tipo di questo dato sarà generalmente ElementRef<HTMLInputElement> (onchange ecceterà dipende il tipo di input)
