import { createElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import ContactsWidget from './ContactsWidget.tsx';

class ContactsWidgetExport extends HTMLElement {
  connectedCallback() {
    render(createElement(ContactsWidget), this);
  }

  disconnectedCallback() {
    unmountComponentAtNode(this);
  }
}
customElements.define('avaya-widget-mgm-contacts', ContactsWidgetExport);
