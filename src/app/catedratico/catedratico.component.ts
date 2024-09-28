import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-catedratico',
  templateUrl: './catedratico.component.html',
  styleUrls: ['./catedratico.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class CatedraticoComponent {
  catedraticoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.catedraticoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(18)]],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      especialidad: ['', [Validators.required]],
      fechaIngreso: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.catedraticoForm.valid) {
      const formData = this.catedraticoForm.value;
      console.log('Datos del catedrático: ', formData);
    } else {
      console.log('Formulario inválido');
    }
  }
}
