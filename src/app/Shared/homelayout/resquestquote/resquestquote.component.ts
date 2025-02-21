import {ChangeDetectionStrategy, Component,signal} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import Validation from './validtion';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { OnlynumberDirective } from './onlynumber.directive';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-resquestquote',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, OnlynumberDirective, MatFormFieldModule,],
  templateUrl: './resquestquote.component.html',
  styleUrl: './resquestquote.component.scss'
})
export class ResquestquoteComponent {
  form:any= FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    emailjs.init('XO2OAzh8e1ySHkJPR'); // Ensure EmailJS is initialized

    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^[0-9]{10,13}$")]], // Ensure valid phone number
      //subject: ['', Validators.required],
      message: [''] // Ensure message is required
    });
  }

  // Getter for easy access to form fields in template
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {
    this.submitted = true;

    // Stop submission if form is invalid
    if (this.form.invalid) {
      // alert("Please fill in all required fields correctly.");
      return;
    }

    try {
      let response = await emailjs.send("service_ws959ff", "template_tt1n5xt", {
        subject: this.form.value.subject,
        message: this.form.value.message,
        mobile: this.form.value.mobile,
        email: this.form.value.email,
        firstname: this.form.value.firstname,
        lastname: this.form.value.lastname
      });

      console.log("Email sent successfully!", response);
      alert('Message sent successfully!');
      this.submitted = false;
      this.form.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      alert('Failed to send message. Please try again.');
    }
  }
}

