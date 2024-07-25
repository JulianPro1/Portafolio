import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from "@angular/common";
import { NgModel } from "@angular/forms";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PresentationComponent } from "./presentation/presentation.component";
import { EducationComponent } from "./education/education.component";
import { TechnologiesComponent } from "./technologies/technologies.component";
import { FooterComponent } from "./footer/footer.component";
import { ExperiencieComponent } from "./experiencie/experiencie.component";
import { IntroductionComponent } from "./introduction/introduction.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, NavBarComponent, PresentationComponent, EducationComponent, TechnologiesComponent, FooterComponent, ExperiencieComponent, IntroductionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
