import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkExperienceListComponent } from "./work-experience-list/work-experience-list.component";
import { EducationListComponent } from "./education-list/education-list.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, WorkExperienceListComponent, EducationListComponent, ContactMeComponent, AboutMeComponent, HeaderComponent]
})
export class AppComponent {
    title = 'personal-website-angular';
}
