import { Component } from '@angular/core';
import { AccessPage } from '../../interfaces/access-page/access-page';

@Component({
  selector: 'app-login-form-component',
  standalone: true,
  imports: [ AccessPage ],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.css',
})
export class LoginFormComponent {}
