export interface Contact {
  name: string;
  number: string;
  group: string;
}

export interface ContactGroup {
  id: number;
  name: string;
  contacts: Contact[];
}
