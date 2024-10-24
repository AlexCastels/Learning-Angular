import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProvaComponent } from "./prova/prova.component";
import { BtnComponent } from "./btn/btn.component";
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProvaComponent, BtnComponent , InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning-Angular';
}

//@Component è un decoratore della classe AppComponent, viene importato da angular/core e ha bisogno di una serie di
//informazioni definite, come l'html e il css del componente

//selector: fa riferimento al tag(selettore) html che servirà per renderizzare il nostro componente, il modo in cui noi
//possiamo richiamarlo, in index.html viene chiamato infatti nel body <app-root>,
//ad esempio creando un comp con selettore <app-btn> potremmo utilizzarlo come tag
//templateUrl: path del template html del nostro componente, si potrebbe scrivere direttamente al suo interno
//styleUrl: path per lo stile del nostro componente

//standalone: generalmente i componenti angular devono essere definiti in un NgModule (moduli) ed essere importati secondo 
//delle specifiche, con questa opzione è possibile creare dei comp indipendenti dai modules
//un componente standalone può importare delle dipendenze al suo interno, rendendo il componente più autonomo
//imports: utilizzato per importare altre direttive al componente dichiarato standalone, RouterOtulet è una direttiva
//di angular per gestire il routing

//queste due opzioni sono state introdotte nel nuovo angular