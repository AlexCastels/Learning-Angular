import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { BtnComponent } from './btn/btn.component';
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

import { MappingComponent } from './mapping/mapping.component';
import { SwitchComponent } from './switch/switch.component';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './child/child.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { HighlightDirective } from './directive/highlight.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoutingTestComponent } from './routing-test/routing-test.component';
import { ContattiComponent } from './contatti/contatti.component';
import { SingoloContattoComponent } from './singolo-contatto/singolo-contatto.component';
@NgModule({
    declarations: [
        AppComponent,
        ProvaComponent,
        BtnComponent,
        InputComponent,
        MappingComponent,
        SwitchComponent,
        FatherComponent,
        ChildComponent,
        ElementRefComponent,
        HighlightDirective,
        CustomDirectiveComponent,
        HomeComponent,
        AboutComponent,
        RoutingTestComponent,
        ContattiComponent,
        SingoloContattoComponent
    ],
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
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

//esempio di NgModule
//declaration: contiene i nostri componenti che appartengono al modulo
//imports: Questa sezione elenca i moduli di cui il modulo corrente ha bisogno per funzionare
//providers: Qui vanno inseriti i servizi che il modulo fornisce all'intera applicazione o solo al modulo specifico
//bootstraps: viene indicato il componente principale dell'applicazione, quello che viene avviato per primo.
