import { Component, inject, model, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cv-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cv-form.component.html',
  styleUrl: './cv-form.component.scss'
})
export class CvFormComponent {
 cvData =model();
  cvForm: FormGroup;
  private fb= inject(FormBuilder);

  constructor() {
    this.cvForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      photoUrl: [''],
      contact: this.fb.group({
        phone: ['',[ Validators.required,Validators.pattern(/^\+?\d{3}?\s?6\d{2}(\s\d{3}\s\d{3}|\s\d{2}\s\d{2}\s\d{2})$/) ]],
        email: ['', [Validators.required, Validators.email]],
        address: ['']
      }),
      education: this.fb.array([]),
      experience: this.fb.array([]),
      references: this.fb.array(['']),
      languages: this.fb.array(['']),
    });
  }

  get education() {
    return this.cvForm.get('education') as FormArray;
  }

  get experience() {
    return this.cvForm.get('experience') as FormArray;
  }

  addEducation() {
    this.education.push(this.fb.group({
      degree: ['', Validators.required],
      institution: ['', Validators.required],
      graduationDate: ['', Validators.required],
    }));
  }

  addExperience() {
    this.experience.push(this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['']
    }));
  }

  removeEducation(index: number) {
    this.education.removeAt(index);
  }

  removeExperience(index: number) {
    this.experience.removeAt(index);
  }

  uploadPhoto(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.cvForm.patchValue({ photoUrl: reader.result });
    };
    reader.readAsDataURL(file);
  }
  onSubmit(event: Event) {
    event.preventDefault();
    this.cvData = this.cvForm.value;
  }
  onkeyChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

  }

}
