import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  private readonly fb = inject(FormBuilder); // ← აქ ინჟექცია უსაფრთხოა ველებისთვის

  contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['general', Validators.required],
    phone: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
    agree: [false as boolean, Validators.requiredTrue],
  });

  loading = false;
  toast = { show: false, type: 'success' as 'success' | 'error' };

  get f() { return this.contactForm.controls; }

  async onSubmit() {
    if (this.contactForm.invalid) { this.contactForm.markAllAsTouched(); return; }
    this.loading = true;
    try {
      await new Promise(r => setTimeout(r, 1200));
      this.showToast('success');
      this.contactForm.reset({ subject: 'general', agree: false, name: '', email: '', phone: '', message: '' });
    } catch {
      this.showToast('error');
    } finally { this.loading = false; }
  }

  private showToast(type: 'success' | 'error') {
    this.toast.type = type; this.toast.show = true;
    setTimeout(() => (this.toast.show = false), 2800);
  }
}