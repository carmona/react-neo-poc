import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { store } from './store/index.ts';
import ContactsWidgetExport from './routes/Widgets/ContactsWidgetExport.tsx';

customElements.define('avaya-widget-mgm-contacts', ContactsWidgetExport);
// eslint-disable-next-line no-console
console.info('avaya-widget-mgm-contacts defined');

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
}
