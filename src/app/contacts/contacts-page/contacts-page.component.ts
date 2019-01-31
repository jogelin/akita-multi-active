import { Component, OnInit } from '@angular/core';
import { ContactsQuery } from '../state/contacts.query';
import { ContactsService } from '../state/contacts.service';
import { Observable } from 'rxjs';
import { Contact } from '../state/contact.model';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  contact$: Observable<Contact>;

  constructor(private contactsQuery: ContactsQuery, private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsQuery.selectFirst().subscribe(contact => this.contactsService.addActiveContact(contact.id));
    this.initObs$();
  }

  private initObs$() {
    this.contact$ = this.contactsQuery.selectActive().pipe(tap(console.log), map(plans => plans[0]));
  }
}
