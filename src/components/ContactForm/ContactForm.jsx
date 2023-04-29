import PropTypes from 'prop-types';
import { useState } from 'react';
import { ButtonForm, Form, InputForm, LabelForm } from './ContactForm.styled';

export const ContactForm = ({ onClickSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // При вводі у два поля інпуту( name, number) змінюємо значення у state

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') setName(value);
    else if (name === 'number') setNumber(value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    onClickSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <LabelForm>
        Name
        <InputForm
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputForm
          type="tel"
          name="number"
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </LabelForm>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </Form>
  );
};

ContactForm.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
};
