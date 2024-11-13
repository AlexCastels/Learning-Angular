import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-directive',
    templateUrl: './custom-directive.component.html',
    styleUrl: './custom-directive.component.css',
})
export class CustomDirectiveComponent {
    color = 'inherit'

    handleColor(color : string){
        this.color = color
    }
}
