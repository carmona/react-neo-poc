import React from 'react';

import { Form, TextInput, Button } from '@avaya/neo-react';
import './forms.scss';

const Forms = () => (
  <div className="FormsPage">
    <h2>Forms page</h2>
    <h4>Regular Form</h4>
    <Form aria-label="Playground form" className="PocForm">
      <TextInput label="Name" placeholder="Type your name here." type="text" />
      <TextInput clearable label="Email" placeholder="Type your email here." type="email" />
      <TextInput
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        label="Phone Number"
        placeholder="Type your phone number here."
        type="number"
        accept="number"
        inputMode="numeric"
      />
      <div className="PocForm__buttons">
        <Button id="btn-submit" variant="primary">
          Submit
        </Button>
        <Button id="btnCancel" variant="secondary">
          Cancel
        </Button>
      </div>
    </Form>
  </div>
);

export default Forms;
