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
- ng generate component -> ng g c nomeCopm

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

 possiamo utilizzare delle proprietà della classe per salvare stringhe e utilizzarli nel nostro html dentro le {{ }},
 al loro interno è possibile utilizzare qualsiasi espressione, come conditional , ternario , funzioni, variavili ecc
 il codice al suo interno non può essere multiriga.
 Si intende qualsiasi espressione js che può essere tramutata in stringa

- property binding

Riferito agli attributi degli elementi HTML, dove possiamo modificarli attraverso il nostro componente classe
ad esempio può essere una class o un attributo di un btn.
Per poter collegare un attributo HTML ad una proprietà del componente possiamo semplicemente racchiudere 
tra [] gli attributi ed inserire tra apici la proprietà

```
isDisabled = false || immagine1 = 'http//ecc'

<button [disabled]='isDisabled'> 
<img [src]='immagine1'>
```

- event binding

Riferito agli eventi in ascolto
per poter collegare un metodo del nostro componente classe a un elemento HTML dovremo utilizzare le () specificando il tipo di evento e poi associarlo al metodo che dichiareremo nel componente

```
esempio: <btn (click)='onClick()'> aggiungendo il parametro 'this' alla funzione possiamo accedere all'intero componente

esempio: <input (input)="miaFunc($event)"> in questa maniera possiamo accedere all'obj evento di un input passandolo alla funzione
```

- two way nimding 

Si tratta di collegare il componente sia lato HTML che logico da entrambi i lati, utilizzando delle direttive

```
esempio: <input [(ngModel)]='variabile'> così facendo colleghiamo un input ad una variabile in automatico
```

ngModel che fa parte del FormModel di Angular si occupera di gestire la variabile puntata, in questo caso è un utilizzo di property ed event binding contemporaneo gestito da ngModel, connette la variabile tramite un output e un input del dato.
Dunque ngModel non avrà bisogno di essere associato ad un metodo, esso stesso è un metodo che gestisce il tutto.

# DIRETTIVE

Le direttive in Angular sono delle classi che possono essere utilizzate nei nostri elementi HTML per poter cambiare il loro comportamento, ad esempio ngModel che permette di potersi collegare ad una variabile.

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

Si tratta di poter far riferimento un blocco di codice HTML racchiuso in un <ng-tamplate> e fargli riferimento, 
questo blocco è visibile solamente ad Angular, utilizzato generalmente nel if/else, dunque se la variabile isVisible è true verrà mostrato il primo <p> altimenti verrà visualizzato l'ng-template associato con #bloccoElse

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
Successivamente potremo accedere all'elemento del singolo obj tramite la string interpolation. Verranno creati tanti < li > quanti gli elementi presenti nell'array.

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
<div *ngFor="let item of list ; index ad i , count as c , first ad isFirst , last as isLast , even as isEven , odd as isOdd ">
    <p>{{i}} {{item.nome}}</p>
</div>
```

- index : prende l'indice di riferimento nell'array
- count : recupera il conteggio totale degli elementi nell'array
- first : ritorna true se è il primo elemento
- last : ritorna true se è l'ultimo elemento
- even : ritorna true se è dispari
- odd : ritorna true se è pari