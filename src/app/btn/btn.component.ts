import { Component } from '@angular/core';

@Component({
    selector: 'app-btn',
    templateUrl: './btn.component.html',
    styleUrl: './btn.component.css',
})

export class BtnComponent {
    
    isDisable = false
    count = 0

    handleBtn(){
        this.count ++   
    }
}
