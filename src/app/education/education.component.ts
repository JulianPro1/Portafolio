import { Component , ViewChild } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  @ViewChild(CardComponent) child?: CardComponent; 

}
