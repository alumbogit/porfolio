import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-cv-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-preview.component.html',
  styleUrl: './cv-preview.component.scss'
})
export class CvPreviewComponent {

  cv =input.required();


}
