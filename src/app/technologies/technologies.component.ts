import { Component } from '@angular/core';
import { NgClass } from "@angular/common";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [NgClass, CardComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

}
