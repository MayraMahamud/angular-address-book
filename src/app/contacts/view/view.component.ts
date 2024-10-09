import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/models.module';

@Component({
  selector: 'app-view',
  standalone: false,
  
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contact: Contact | null = null;

  constructor(
    private readonly contactsService: ContactService,
    private readonly route: ActivatedRoute
  ) {
    //id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactsService.GetContactById(
      Number(route.snapshot.paramMap.get('id'))
    );
  }
}



