import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form-component',
  standalone: true,
  imports: [ 
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.css',
})

export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: Boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40)
        ]
      ]
    });
  }

  //Envío del formulario
  login() {
    this.submitted = true;

    if(this.loginForm.invalid) {
      console.error('ERROR AL ENVIAR EL FORMULARIO')
      return;
    }

    console.log('Formulario valido ', this.loginForm.value);
  }

  get form() {
    return this.loginForm.controls;
  }

  getErrorMessage(field: string): string {
    const control = this.loginForm.get(field);

    if(control?.hasError('required')) {
      return 'Campo obligatorio';
    }

    if(control?.hasError('email')) {
      return 'Correo no válido o incorrecto!';
    }

    if(control?.hasError('minlength')) {
      return 'La contraseña debe tener almenos 3 caracteres';
    }

    if(control?.hasError('maxlength')) {
      return 'La contraseña no puede contener mas de 40 caracteres';
    }

    return '';
  }

}
