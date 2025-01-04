import { Component, Directive, ElementRef, HostListener, model, signal } from '@angular/core';
import { CvFormComponent } from '../cv-form/cv-form.component';
import { CvPreviewComponent } from '../cv-preview/cv-preview.component';
import { CV } from '../../models/cv.model';


@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CvFormComponent,CvPreviewComponent],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.scss',
})
export class AcceuilComponent {
  barem=signal(4);
  max :number=5;
  min :number=1;
  cvData=model<CV>();

  constructor(private el: ElementRef) {}

  @HostListener('click') onclick() {
    this.zoom();
  }
  decreaseFontSize() {
    if (this.barem()>this.min) {
      this.barem.update(n => n - 1);
    }
  }
  incrementFontSize() {
    if (this.barem()<this.max){
      this.barem.update(n => n + 1);
    }
  }
  zoom() {
    const element = document.getElementById('cv-view');
    if (element) {
      const scaleValue = this.barem() / 4;

      element.style.transform = `scale(${scaleValue})`;
      element.style.transition = 'transform 0.3s ease, top 0.3s ease';
    }
  }

}
