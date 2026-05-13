import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form-component',
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './register-form-component.html',
  styleUrl: './register-form-component.css',
})

export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  submited: Boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: [''],
      username: ['', Validators.required],
      email: ['', [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40)
        ]
      ]
    });
  }

  register(): void {
    this.submited = true;

    if(this.registerForm.invalid) {
      console.error('ERROR AL ENVIAR EL FORMULARIO');
      return;
    }

    console.log('FORMULARIO VALIDO -> ', this.registerForm.value);
  }

  get form() {
    return this.registerForm.controls;
  }

  getErrorMessage(field: string): string {
    const control = this.registerForm.get(field);

    if(control?.hasError('required')) {
      console.log('ENTRO');
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
