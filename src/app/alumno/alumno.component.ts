import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class AlumnoComponent {
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(1)]],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      fechaIngreso: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      const formData = this.alumnoForm.value;
      console.log('Datos del alumno: ', formData);
    } else {
      console.log('Formulario inválido');
    }
  }
}
