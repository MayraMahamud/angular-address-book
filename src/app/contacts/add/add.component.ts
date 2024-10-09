import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../models/models.module';

@Component({
  selector: 'app-add',
  standalone: false,

  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;
  cservice: ContactService;
  constructor(
    private formBuilder: FormBuilder,
    private readonly contactService: ContactService
  ) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],

    });
    this.cservice = this.contactService;
  }

  addContact(): void {
    const newContact: Contact = {
      id:this.contactForm.value.id,
      firstname: this.contactForm.value.firstname,
      lastname: this.contactForm.value.lastname,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.cservice.AddContact(newContact);
    this.contactForm.reset();
  }
}


