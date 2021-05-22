import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  contactForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.contactForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.contactForm.updateValueAndValidity();
  }

  ngOnInit(): void {
  }

  isValid(): boolean {
    return this.contactForm.valid;
  }

  hasError(): boolean {
    return this.contactForm.invalid && this.contactForm.dirty;
  }

  getErrorMessage(): string {
    console.log('this.contactForm :>> ', this.contactForm);
    if (
      this.contactForm.controls.email.hasError('required')) {
      return "Ingresa tu correo";
    }
    else if (this.contactForm.controls.email.hasError('email')) {
      return "Este correo no es válido";
    }
    return "";
  }

  getEmailValue(): string {
    return this.contactForm.controls.email.value;
  }

  sendEmail() {
    console.log('this.contactForm :>> ', this.contactForm.value);
  }


}
