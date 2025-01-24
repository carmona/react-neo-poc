import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactsWidget from './ContactsWidget.tsx';

export default class ContactsWidgetExport extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    // TODO: change this URL to be dynamic
    style.textContent = `
      @import url("http://127.0.0.1:8080/mgm-contacts.css");
      @import url("http://127.0.0.1:8080/mgm-contacts2.css");
    `;
    shadow.appendChild(style);
    shadow.appendChild(mountPoint);

    const root = createRoot(mountPoint);
    root.render(<ContactsWidget />);
  }

  disconnectedCallback() {
    const mountPoint = this.shadowRoot?.querySelector('div');
    const root = createRoot(mountPoint as Element);
    root.unmount();
  }
}
