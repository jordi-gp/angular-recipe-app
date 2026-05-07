import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-access-page',
    imports: [ CommonModule, RouterOutlet ],
    template: `
        <div class='access-container'>
            <div class='access-content'>
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styleUrl: './access-page.css'
})

export class AccessPage {}