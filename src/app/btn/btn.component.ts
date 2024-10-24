import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-btn',
    standalone: true,
    imports: [MatButtonModule, MatDividerModule, MatIconModule],
    templateUrl: './btn.component.html',
    styleUrl: './btn.component.css',
})

export class BtnComponent {
    
    isDisable = false

    handleBtn(){
        console.log('click');   
    }
}
