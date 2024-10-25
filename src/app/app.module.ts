import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProvaComponent } from "./prova/prova.component";
import { BtnComponent } from "./btn/btn.component";
import { InputComponent } from './input/input.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';

import { NgModel } from '@angular/forms';
import { MappingComponent } from "./mapping/mapping.component";
import { SwitchComponent } from "./switch/switch.component";
@NgModule({
    declarations: [AppComponent , ProvaComponent , BtnComponent , InputComponent , MappingComponent , SwitchComponent],
    imports: [
        RouterOutlet,
        BrowserModule,
        RouterModule,
        BrowserAnimationsModule,
        FormsModule,
        MatSlideToggleModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatCardModule,
        MatProgressBarModule,
        MatChipsModule,
    ],
    providers : [],
    bootstrap: [AppComponent]
})

export class AppModule {}

//esempio di NgModule
//declaration: contiene i nostri componenti che appartengono al modulo
//imports: Questa sezione elenca i moduli di cui il modulo corrente ha bisogno per funzionare
//providers: Qui vanno inseriti i servizi che il modulo fornisce all'intera applicazione o solo al modulo specifico
//bootstraps: viene indicato il componente principale dell'applicazione, quello che viene avviato per primo.