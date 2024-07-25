import { Component } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [NgClass],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
    correo:string = ' jjosealejos07@gmail.com'
    tlfno:string = '+58 412-5659767'
}
