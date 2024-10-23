## CARTELLE/FILE

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

## SRC

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

## CREARE COMPONENTE
Questo comando permette di creare un nuovo componente, tramite Angular CLI verranno creati tutti i file per gestire un comp
cioè .html .css .spec.ts e .ts
i componenti in angular vengono chiamati nome.component.html ecc e divisi in cartelle
- ng generate component -> ng g c nomeCopm

## CICLO DI VITA COMPONENTE
<img src='./public/img/cicloComp.jpg' width=400>

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

## DATA BINDING / PASSAGGIO DI DATI TRA MODEL (LOGICA) E VIEW

Ci sono due tipi di passaggio di dati:
- unidirezionale || one-way
    - string interpolation
    - property binding
    - event binding
- bidirezionale || two way

1. string interpolation

 possiamo utilizzare delle proprietà della classe per salvare stringhe e utilizzarli nel nostro html dentro le {{ }},
 al loro interno è possibile utilizzare qualsiasi espressione, come conditional , ternario , funzioni, variavili ecc
 il codice al suo interno non può essere multiriga.
 Si intende qualsiasi espressione js che può essere tramutata in stringa

2. property binding

Riferito agli attributi degli elementi HTML, dove possiamo modificarli attraverso il nostro componente classe
ad esempio può essere una class o un attributo di un btn.
Per poter collegare un attributo HTML ad una proprietà del componente possiamo semplicemente racchiudere 
tra [] gli attributi ed inserire tra apici la proprietà

isDisabled = false || immagine1 = 'http//ecc'

<button [disabled]='isDisabled'> 
<img [src]='immagine1'>

3. event binding

riferito agli eventi in ascolto

4. two way

un esempio è quando un input modifica qualche variabile o proprietà nel componente classe