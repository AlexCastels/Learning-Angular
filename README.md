# CARTELLE/FILE

- .browserlistrc = contiene tutte le info sui browser e su come l'app viene buildata in ogni motore specifico
- .editorconfig = contiene info e regole sull'editor e sullo stile effettivo del codice del progetto
- .gitignore = tutti i file che non saranno caricati su git
- angular.json = contiene una serie di dati relativi ad angular
- karma.conf.js = Karma, come jasmine, serve per poter testare la nostra app e per il debugging
- package-lock.json = contiene i dati relativi ai dati di node_modules
- package.json = contiene dati e dettagli relativi al progetto e le sue dipendenze
- tsconfig.app.json = configurazione per la produzione, punta ai file che servono
- tsconfig.json = sono informazioni per il compilatore
- tsconfig.spec.json = configurazione per il testing, punta ai file che servono

# SRC

- APP
    - app-routing.module.ts / app.routes.ts = file che gestisce il routing 
    - app.component.html = struttura componente 
    - app.component.css = stile componente
    - app.component.ts = specifiche del componente stesso e configurazione, contiene path sia della struttura del componente
    che dello stile che verranno importati, contiene il decoratore e la classe stessa del componente

- ENVIRONMENT (deprecata?)
    - environment.prod.ts = contiene variabili di ambiente per la produzione
    - environment.ts = contiene variabili di ambiente per l'app finale
    - index.html = file html primario <app-root> è il componente globale gestito da angular
    - main.ts = file iniziale del progetto angular

# CREARE COMPONENTE
Questo comando permette di creare un nuovo componente, tramite Angular CLI verranno creati tutti i file per gestire un comp
cioè .html .css .spec.ts e .ts
i componenti in angular vengono chiamati nome.component.html ecc e divisi in cartelle
- `ng generate component` -> `ng g c nomeCopm`

# CICLO DI VITA COMPONENTE

<img src='./public/img/CicloComp.jpg' width=400>

Il ciclo di vita di un componente in Angular è più articolato rispetto a react, si compone da diverse fasi, 
dalla sua inizializzazione , al suo effettivo utilizzo , alla vista e alla sua fine.
Durante qualsiasi fase del suo ciclo di vita, vengono effettuati dei controlli, sia durante il popolamento di dati, sia
sulla sua attuale fase di montaggio della vista finale del componente,  è possibile modificarne il comportamento a seconda della risposta e degli esiti di questi controlli nelle varie fasi, rendendo il componente modulabile al 100%

Le funzioni di controllo sono delle interfacce che devono essere implementate nel nostro componente classe e sono: 
- ngOnChanges()
- ngOnInit()
- ngDoCheck()
- ngAftercontentinit()
- ngAfterContentChecked()
- ngAfterViewinit()
- ngAfterViewChecked()
- ngOnDestroy()

Il componente sarà sempre in ascolto per qualche cambiamente, infatti per questo avvengono sempre dei controlli prima e dopo
il caricamento dei vari dati

<img src='./public/img/spiegazioneComp.jpg' width=400>

1. Viene avviato il costruttore
2. Viene inizializzato il comp
3. Avviene il primo check
4. Viene inizializzato il contentuto
5. Viene controllato
6. Viene inizializzata la vista
7. Viene controllata
8. Viene rieffettuato un controllo globale
9. Funzione dopo che avviene il controllo del contenuto
10. Funzione dopo che avviene il controllo della vista
11. Funzione che avviene dopo la distruzione del comp

# DATA BINDING / PASSAGGIO DI DATI TRA MODEL (LOGICA) E VIEW IN COMPONENTE

Ci sono due tipi di passaggio di dati:
- unidirezionale || one-way
    - string interpolation
    - property binding
    - event binding
- bidirezionale || two way

- string interpolation

 possiamo utilizzare delle proprietà della classe per salvare stringhe e utilizzarli nel nostro html dentro le `{{ }}`,
 al loro interno è possibile utilizzare qualsiasi espressione, come conditional , ternario , funzioni, variavili ecc
 il codice al suo interno non può essere multiriga.
 Si intende qualsiasi espressione js che può essere tramutata in stringa

- property binding

Riferito agli attributi degli elementi HTML, dove possiamo modificarli attraverso il nostro componente classe
ad esempio può essere una class o un attributo di un btn.
Per poter collegare un attributo HTML ad una proprietà del componente possiamo semplicemente racchiudere 
tra `[]` gli attributi ed inserire tra apici la proprietà

```
isDisabled = false || immagine1 = 'http//ecc'

<button [disabled]='isDisabled'> 
<img [src]='immagine1'>
```

- event binding

Riferito agli eventi in ascolto
per poter collegare un metodo del nostro componente classe a un elemento HTML dovremo utilizzare le `()` specificando il tipo di evento e poi associarlo al metodo che dichiareremo nel componente

```
esempio: <btn (click)='onClick()'> aggiungendo il parametro 'this' alla funzione possiamo accedere all'intero componente

esempio: <input (input)="miaFunc($event)"> in questa maniera possiamo accedere all'obj evento di un input passandolo alla funzione
```

- two way binding 

Si tratta di collegare il componente sia lato HTML che logico da entrambi i lati, utilizzando delle direttive

```
esempio: <input [(ngModel)]='variabile'> così facendo colleghiamo un input ad una variabile in automatico
```

ngModel che fa parte del FormModel di Angular si occupera di gestire la variabile puntata, in questo caso è un utilizzo di property ed event binding contemporaneo gestito da ngModel, connette la variabile tramite un output e un input del dato.
Dunque ngModel non avrà bisogno di essere associato ad un metodo, esso stesso è un metodo che gestisce il tutto.

# DIRETTIVE

Le direttive in Angular sono degli attributi che possono essere utilizzati nei nostri elementi HTML per poter cambiare il loro comportamento, ad esempio ngModel che permette di potersi collegare ad una variabile.

si dividono in 3 categorie:
- built-in : (ngClass , ngStyle, ngModel) modificano il comportamento dell'elemento

- attribute (personalizzate) : è la possibilità di poter creare attributi personalizzati da inserire negli elementi

- structural : (*ngIf , *ngFor) permettono di cambiare il DOM aggiungendo o rimuovendo elementi
    - *ngIf per mettere una condizione nell'elemento per farlo apparire o fare cose
    - *ngFor per 'mappare' un array e creare per ogni membro un elemento html

# *ngIF (Conditional Rendering)

Permette di inserire condizioni per mostrare o meno elementi

```
esempio : <p *ngIf="4 < 5" > Hello World <p> se true l'elemento DOM sarà generato
```

- Variabile template

Si tratta di poter far riferimento un blocco di codice HTML racchiuso in un `<ng-tamplate>` e fargli riferimento, 
questo blocco è visibile solamente ad Angular, utilizzato generalmente nel if/else, dunque se la variabile isVisible è true verrà mostrato il primo `<p>` altimenti verrà visualizzato l'ng-template associato con #bloccoElse

```
<p *ngIf="isVisible ; else bloccoElse">Sono visibile</p>
<ng-template #bloccoElse> 
    <p>non sono visibile</p>
</ng-template>
```

altro esempio con then:

```
<p *ngIf="isVisible ; then bloccoIf else bloccoElse"></p>
<ng-template #bloccoIf> 
    <p>sono visibile</p>
</ng-template>
<ng-template #bloccoElse> 
    <p>non sono visibile</p>
</ng-template>
```

In questo caso in maniera più coerente dichiariamo due blocchi ng-template associati a due variabili template (wrapper)

# *ngFor (Mapping)

Permette di mappare dati dentro elementi HTML in maniera dinamica. *ngFor è un attributo dell'elemento da voler ripetere

```
<li *ngFor="let item of array">{{item.nome}}</li>
```

Per poter utilizzarlo, viene dichiarata una variabile che farà riferimento al singolo obj contenuto in un array
Successivamente potremo accedere all'elemento del singolo obj tramite la string interpolation. Verranno creati tanti `<li>` quanti gli elementi presenti nell'array.

*ngFor può essere utilizzato anche nei div, tutto quello contenuto al suo interno sarà generato a seconda degli elementi contenuti nell'array


```
let persone = [{nome : luca , cognome : bianchi , isOnline : false}]

<div *ngFor="let persona of persone">
    <p>{{persona.nome}}</p>
    <p>{{persona.cosgnome}}</p> <span * ngIf="persona.isOnline">Online</span>
</div>
```

Possiamo coordinare *ngFor e *ngIf per poter mostrare di una lista ciò che più vogliamo 

```
<div *ngFor="let item of utenti" class="container">
    <p>{{item.nome}}</p>
    <p>{{item.cognome}}</p>
    <span *ngIf="item.isOnline ; then online else offline"></span>
    <ng-template #online>
        <span class="online"></span>
    </ng-template>
    <ng-template #offline>
        <span class="offline"></span>
    </ng-template>
</div>
```

Inoltre sono presenti altri elementi nel *ngFor a cui poter far riferimento.

```
<div *ngFor="let item of list ; index as i , count as c , first ad isFirst , last as isLast , even as isEven , odd as isOdd ">
    <p>{{i}} {{item.nome}}</p>
</div>
```

- index : prende l'indice di riferimento nell'array
- count : recupera il conteggio totale degli elementi nell'array
- first : ritorna true se è il primo elemento
- last : ritorna true se è l'ultimo elemento
- even : ritorna true se è dispari
- odd : ritorna true se è pari

# [ngSwitch] e *ngSwitchCase

Un altra direttiva esistente è quella dello switch

```
<div [ngSwitch]="stringa">
    <p *ngSwitchCase="'Alex'">Caso 1</p>
    <p *ngSwitchCase="'Sofia'">Caso 2</p>
    <p *ngSwitchDefault>Default</p>
</div>
<div [ngSwitch]="numero">
    <p *ngSwitchCase="1">Caso 1</p>
    <p *ngSwitchCase="2">Caso 2</p>
    <p *ngSwitchDefault>Default</p>
</div>
```

Dove *ngSwitchCase si occuperà effettivamente di mostrare l'elemento in base alla condizione

Mentre [ngSwitch] si collegherà alla proprietà nel class component

# ngStyle

E' una direttiva che permette di andare a modificare direttamente lo stile di un elemento tramite il binding della direttiva stessa, funziona inserendo un obj dove poter andare a scrivere direttamente le prooprietà css da modificare, al suo interno è possibile puntare a variabili, richiamare funzioni, utilizzare condizionali.

Le proprietà possono essere scritte tra apici in maniera 'originale' al css, o in camelCase e ridotti se fuori da apici

Esempi:

```
<div class='cerchio' [ngStyle]="{'background-color' : 'red'}">
<div class='cerchio' [ngStyle]="{background : 'red'}">
<div class='cerchio' [ngStyle]="{background : persona.isOnline ? 'green' : 'red'}">
<div class='cerchio' [ngStyle]="{background : getColor()}">
```

# ngClass

E' una direttiva che permette di modificare le classi di un elemento, bisognerà fare il binding della direttiva per poter accedere alle classi del nostro css e alle variabili del nostro componente 

```
<div class = 'cerchio' [ngClass]="{'classe' : condizione, 'classe' : condizione}">
<div class = 'cerchio' [ngClass]="{'classe' : condizione, 'classe' : condizione, 'classe1 classe2' : condizione}">
<div class = 'cerchio' [ngClass]="{condizione ? 'classe1' : 'classe2'}">
```

# PARENT TO CHILD (PROP)

Bisogna utilizzare un decoratore @Input di angular/core per poter indicare al nostro componente che riceverà dei dati dall'esterno

`@Input() variabile : tipo;` -> `@Input() data : any;`

Per poter ricevere dati, utilizziamo il property binding per poter puntare alla variabile e associargli un dato

<child [data]="dato">

# CHILD TO PARENT

E' possibile anche mandare dati dal comp figlio al comp padre tramite un EventEmitter che dovremo collegare al dato che vogliamo mandare , il tutto tramite un decoratore @Output.

Creiamo un nuovo emitter dove poi andremo a dichiarare quali dati mandare tramite un evento che lancerà l'emitter. 'mandaDatiEvento' sarà l'emitter in sè


```
@Output() mandaDatiEvento = new EventEmitter<Type>()

dato = "i miei dati"

myFunction(){
    this.mandaDatiEvento.emit(this.dato)    
}
```

dopo di che dovremo lanciare questa funzione per generare l'eventEmitter, nell'esempio un btn ma potrebbe essere anche una funzione del ciclo di vita del componente ad esempio

Fatto questo bisognerà anche creare il collegamento con la funzione nel componente padre, dove nel child dichiarato punteremo all'emitter e dichiareremo una funzione che conterrà l'evento e che potremo utilizzare e richiamare nel componente padre, $event in sè conterrà i dati da noi mandati e dichiarati (nell'esempio una stringa)

```
<child (mandaDatiEvento)="riceviDati($event)">
```

riceviDati() sarà cos' accessibile al padre

Questo è un modo per poter mandare dati in modo inverso

# VARIABILE TEMPLATE (Riferimetno elementi HTML)

Si tratta di variabili di riferimento per poter accedere ai nostri elementi HTML, utile nei form.

Viene utilizzato un decoratore `ViewChild()` nel nostro componente che sarà collegato alla variabile di riferimento


```
<input #riferimento value='ciao'>
```

```
@ViewChild('riferimento') = mioInput !: ElementRef<HTMLInputElement>
```

ElementRef è il modo corretto del tipo di dato per il decoratore viewChild, ma potrebbe contenere un valore nullo anche se correttamente dichiarato, per poter evitare questo problema utilizziamo il `!:` per dichiarare che non sarà nullo

adesso la variabile mioInput conterrà l'obj che fa riferimento all'input e al suo contenuto, conterrà i nativeElement al suo interno e poi ai loro valori, questo perchè è possibile contenere più elementi con un unico riferimento 

```
value = this.mioInput.nativeElement.value
```

# DIRETTIVE PERSONALIZZATE

Per poter creare una direttiva personalizzata utilizzeremo un comando di angular

`ng generate directive nomeDirettiva` -> `ng g d nomeDirettiva`

Devono essere importate nel modulo dove vogliamo utilizzarle

Vengono utilizzate come se fossero attributi degli elementi, e ci danno la possibilità di accedere a valori e poter modificare l'elemento in se, visto che esse diventano delle proprietà dell'elemento altrimenti un riferimento

```
export class HighlightDirective {
    @Input() appHighlight = ''
    constructor(private element : ElementRef) {
        this.element.nativeElement.style.backgroundColor = 'yellow'
    }
}
```

in questo esempio viene modificato direttamente il background dell'elemento ed impostato su giallo

```
    <p appHighlight>Hello World<p/>
```

le direttive possono inoltre ricevere dati da altri componenti, e sono disponibili in tutti i nostri file e vengono salvate in una cartella separata dai nostri componenti.

Più dettagli e spiegazioni nel componente custom-directive.ts

# PIPES

Le pipe sono delle funzioni specifiche per gli elementi in string interpolation {{var}}

Vengono richiamate tramite `|` e possono contenere delle opzioni per modificarne l'utilizzo

Esempi:

- `{{nome | uppercase}}` -> stringa in upperCase
- `{{nome | lowercase}}` -> stringa in loweCase
- `{{data | data:"h:m:s"}}` `{{data | data:"medium"}}` `{{data | data:"d/MMM/yyyy - h:m:s"}}` -> formattiamo la data
- `{{number | number:'1.2-4'}}` -> specifichiamo i decimali di un numero
- `{{number | percent}}` `{{nome | percent:'2.2-4'}}` -> indichiamo la percentuale ed eventuali decimali
- `{{number | currency:'EUR'}}` `{{number | currency:'EUR':'code'}}` -> gestiamo la currency 

Le pipe sono funzione messe a disposizione da angular per modificare velocemente alcuni dati immessi nelle {{}}
E' possibile creare anche pipe personalizzate, ad esempio utilizzate per delle traduzioni

Le pipe hanno molte opzioni, queste vengono elencate tutte nella documentazione ufficiale.

# SERVICES (CONTETX)

E' la possibilità di poter estendere dei dati all'intera app o a diversi moduli specificati

Slega i componenti dalla relazione padre figlio, ed evita il "Prop drilling"

un service viene creato con `ng generate service nomeServizio` -> `ng g s nomeServizio`

è composto da un decoratore `@Injectable` che sta ad indicare che può 'iniettare' dati
e possiede una proprietà provideIn che sta ad indicare il suo scope di utilizzo

Se impostato su 'root' sarà accessibile ovunque, altrimenti bisognerà specificare il module

Per accedere ad un servizio invece, bisognerà richiamarlo dentro il constructor della classe

```
    constructor(private variabilePerServizio : MyServiceComponent){
        data = this.variabilePerServizio.array(o metodo ecc ecc)
    }
```
E' importante definire se i dati devono essere public o private per poter accedervi in questa maniera tramite constructor

dunque in questa maniera avremo accesso ai dati o ai metodi contenuti nel servizio definito
è buona norma scollegare il componente dalla logica, e quindi utilizzare i servizi per contenerla

# ROUTING

Il routing in angular viene gestito tramite un modulo, dove andremo a specificare dentro un array di obj, path e relativo componente da mostrare

```
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '' }, //per gestire il notFound
];
```

Per poter poi mostrare effettivamente il componente dovremo utilizzare il tag `<router-outlet>` che si occuperà di mostrare il componente collegato al routing

Per poter navigare verso quel componente abbiamo a disposizione un attributo chiamato `routerLink="/"` specificando il path

# ROUTER PARAMS 

E' possibile accedere al parametro di una route inserendo in primis il parametro nel path

```
const routes : [
    { path : 'contatti' , component : ContattiComponent } , 
    { path : 'contatti/:id' , component : ContattiComponent }
]
```

Per poter accedere al parametro `:id` nel nostro componente dobbiamo dichiararlo nel constructor

```
constructor(private route: ActivateRoute){}
```

la nostra variabile route adesso acquisisce l'obj del parametro del path.

per poter accedere al valore in se utilizziamo:

```
id = this.route.snapshot.paramMap.get('id')
```

Accedendo in questa maniera al parametro il valore sarà statico, questo perchè viene fatto uno `snapshot`

Se si vuole tenere traccia in modo costante del cambiamento del parametro bisognerà utilizzare il `subscribe`

# CHILDREN ROUTE

In angular è possibile andare a definire dei figli per le routes con la proprietà `children : []`

```
const routes : [
    { path : 'contatti' , component : ContattiComponent , children : [
        {path : ':id , component : SingoloContattoComponent'}
    ]}
]
```

il risultato è lo stesso di come scrivere nella maniera precedente, solamente che adesso per poter mostrare il componente singolo avremo bisogno di un `<router-outlet>` così facendo avremo più libertà di gestire il componente 

C'è un problema nel recupero del param da una route, nel momento in cui viene utilizzato per mostrare componenti in modo dinamico, quando viene utilizzato `.snapshot.` viene recuperato un ''istantanea'' del parametro, come se fosse uno screenshot, che avviene solamente la prima volta, per poter risolvere questo problema nel figlio il parametro dovrà essere acquisito in maniera diversa

```
id : number
user : any

this.route.paramMap.subscribe((params : ParamMap) => {
    this.id = Number(params.get('id'))
    this.user = getOneUser(this.id)
    {...}
})
```

Con `subscribe` vengono ascoltati tutti i cambiamenti della route da un compomente route children
il subscribe tiene traccia del cambiamento del path e dei suoi parametri, al suo interno devono essere
specificati i cambiamenti e le funzioni che terranno traccia di questi cambiamenti, permettendo di avere
a video dati sempre aggiornati

Questo perchè il passaggio dei dati viene in modo asincrono