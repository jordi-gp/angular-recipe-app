import { Component } from "@angular/core";

@Component({
    selector: 'app-access-page',
    imports: [],
    template: `
        <div class='access-container'>
            <div class='access-content'>
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styleUrl: './access-page.css'
})

export class AccessPage {}