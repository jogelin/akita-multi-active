import { Injectable } from '@angular/core';
import { ContactsStore } from './contacts.store';
import { IDS } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  constructor(private contactsStore: ContactsStore) {}

  addActivePlan(contactIDS: IDS): void {
    this.contactsStore.addActive(contactIDS);
  }

  setActivePlan(contactIDS: IDS): void {
    this.contactsStore.setActive(contactIDS);
  }

  removeActivePlan(contactIDS: IDS): void {
    this.contactsStore.removeActive(contactIDS);
  }
}
