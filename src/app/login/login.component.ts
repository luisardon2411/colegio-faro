import { NgIf } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";


@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    loginForm: FormGroup;

    messages: string[] = [
        'La nutrición adecuada es vital para el desarrollo cognitivo de los niños.',
        'Un desayuno saludable mejora el rendimiento escolar.',
        'Incorporar frutas y verduras en la dieta de los niños fortalece su sistema inmunológico.',
        'La hidratación es clave para el bienestar y la concentración en los niños.',
        'Los hábitos alimenticios saludables desde la infancia previenen enfermedades futuras.'
    ];

    currentMessageIndex: number = 0;

    intervalId: any;

    constructor(private fb: FormBuilder) {
        
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit(): void {
        this.startMessageRotation();
        document.title = 'Iniciar sesion'
    }

    startMessageRotation(): void {
        this.intervalId = setInterval(() => {
            this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
        }, 6000);
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            console.log('Formulario válido. Iniciando sesión...');
            console.log(this.loginForm.value);
        } else {
            console.log('Formulario inválido');
        }
    }

    ngOnDestroy(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}