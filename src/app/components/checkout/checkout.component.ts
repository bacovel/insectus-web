import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})

export class CheckoutComponent {

  form: FormGroup = this.builder.group({
    company_name: '',
    to_name: 'Insectus',
    product: '',
    quantity: '',
    email: '',
    phone_number: '',
    country: '',
    address: '',
    postal_code: '',
  });
  
  constructor(private builder: FormBuilder){}

  async send(){
    emailjs.init('SDgtPSRrrWMEHuqlM');
    let response = await emailjs.send("service_07ndjrn","template_qocch06",{
      company_name: this.form.value.company_name,
      to_name: this.form.value.to_name,
      product: this.form.value.product,
      quantity: this.form.value.quantity,
      email: this.form.value.email,
      phone_number: this.form.value.phone_number,
      country: this.form.value.country,
      address: this.form.value.address,
      postal_code: this.form.value.postal_code,
    });

    alert("Message has been sent!");
    this.form.reset();
  }
}
