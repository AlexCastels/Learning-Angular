// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
// .catch((err) => console.error(err));
//configurazione per utilizzare Angular con soli componenti standalone senza necessità di un modulo

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Assicurati di importare il modulo

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));