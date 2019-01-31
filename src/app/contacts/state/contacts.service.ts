import { Injectable } from '@angular/core';
import { ContactsStore } from './contacts.store';
import { IDS } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  constructor(private contactsStore: ContactsStore) {}

  addActiveContact(contactIDS: IDS): void {
    this.contactsStore.addActive(contactIDS);
  }

  setActiveContact(contactIDS: IDS): void {
    this.contactsStore.setActive(contactIDS);
  }

  removeActiveContact(contactIDS: IDS): void {
    this.contactsStore.removeActive(contactIDS);
  }
}
