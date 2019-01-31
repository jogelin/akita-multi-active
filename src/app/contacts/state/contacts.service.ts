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
    // TS2345: Argument of type 'IDS' is not assignable to parameter of type 'ID[]'.   Type 'string' is not assignable to type 'ID[]'.
    // this.contactsStore.setActive(contactIDS);
  }

  removeActiveContact(contactIDS: IDS): void {
    this.contactsStore.removeActive(contactIDS);
  }
}
