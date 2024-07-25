import { Component } from '@angular/core';
import {  NgClass,NgFor } from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass,NgFor],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  

}
