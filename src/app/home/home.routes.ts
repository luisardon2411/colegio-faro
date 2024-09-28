import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AlumnoComponent } from "../alumno/alumno.component";
import { CatedraticoComponent } from "../catedratico/catedratico.component";



export const router: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'alumnos',
        component: AlumnoComponent
    },
    {
        path: 'catedraticos',
        component: CatedraticoComponent
    }
]