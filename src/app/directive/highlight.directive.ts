import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
})

export class HighlightDirective {
    @Input() appHighlight = ''

    @Input() defaultColor = ''

    constructor(private element : ElementRef) {
        // this.element.nativeElement.style.color = this.appHighlight
        // this.element.nativeElement.style.backgroundColor = 'yellow'
        // direttamente non funziona perchè il passaggio del dato è async, approfondire
    }


    @HostListener('mouseenter') onMouseEnter(){
        this.changeColor(this.appHighlight || this.defaultColor)
    }
    
    @HostListener('mouseleave') onMouseLeave(){
        this.changeColor('inherit')
    }
    
    changeColor(color : string){
        this.element.nativeElement.style.color = color
    }
}

//la direttiva personalizzata come quelle di default si utilizza inserendola come se fosse 
//un attributo dell'elemento, e permette di poter modificare l'elemento accedendogli
//tramite ElementRef, in questo caso stiamo andando a modificare solamente il comportamento
//con due tipi di eventi, enter e leave del mouse, cambiando una proprietà di stile

//@HostListener fa riferimento all'ascolto dell'host che rappresenta l'elemento
//e dove al suo interno andiamo a specificare un evento da ascoltare
//deve essere collegato anche ad una funzione con all'interno la logica

//changeColor la utilizziamo per poter passare dinamicamente il valore del colore 

//il primo @Input per ricevere dati deve essere il nome stesso della direttiva
//questo perchè la direttiva è anche una proprietà in sè, dunque eseguiremo il
//property binding su di lei potendo accedere ad altre variabili così collegate

//Sarà possibile inserire un secondo valore di riferimento nella direttiva, potrà
//essere utilizzato per poter accedere ad altri valori e creare condizioni
//il nome può essere diverso