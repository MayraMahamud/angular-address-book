import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../models/models.module';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactsService: ContactService) {
    this.contacts = contactsService.contacts;
  }

}
