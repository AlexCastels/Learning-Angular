import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContattiComponent } from './contatti/contatti.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contatti', component: ContattiComponent },
    { path: 'contatti/:id', component: ContattiComponent },
    { path: '**', redirectTo: '' }, //Per gestire il path notFound
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Configura le rotte principali
    exports: [RouterModule],
})

export class AppRoutingModule {}
