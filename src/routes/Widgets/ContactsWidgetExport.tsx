import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactsWidget from './ContactsWidget.tsx';

export default class ContactsWidgetExport extends HTMLElement {
  static get observedAttributes() {
    return ['base-url'];
  }

  connectedCallback() {
    const mountPoint = document.createElement('div');
    mountPoint.classList.add('mgm-contacts-widget-container');
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    // 127 is the local dev server from ./dist directory
    const baseUrl = this.getAttribute('base-url') || 'http://127.0.0.1:8080';
    // TODO: change this URL to be dynamic
    style.textContent = `
      @import url("${baseUrl}/mgm-contacts.css");
      @import url("${baseUrl}/mgm-contacts2.css");
    `;
    shadow.appendChild(style);
    shadow.appendChild(mountPoint);

    const root = createRoot(mountPoint);
    root.render(<ContactsWidget baseUrl={baseUrl} />);
  }

  disconnectedCallback() {
    const mountPoint = this.shadowRoot?.querySelector('div');
    const root = createRoot(mountPoint as Element);
    root.unmount();
  }
}
