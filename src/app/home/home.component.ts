import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { DropdownComponent } from "../components/dropdown/dropdown.component";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { HeaderComponent } from "../components/header/header.component";

@Component({
    selector: "app-dashboard",
    templateUrl: "./home.component.html",
    standalone: true,
    imports: [
        RouterLink, 
        RouterLinkActive, 
        DropdownComponent, 
        CommonModule,
        SidebarComponent,
        HeaderComponent
    ],
})
export class HomeComponent implements OnInit {

    public menuType: string = 'overlay'
    constructor( 
    ){}

    ngOnInit(): void {
        document.title = 'inicio';
    }
}