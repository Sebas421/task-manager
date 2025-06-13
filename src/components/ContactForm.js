import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado:\n' + JSON.stringify(formData, null, 2));
    setFormData({ firstName: '', lastName: '', email: '', comments: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
     <input name="firstName" placeholder="First Name" />
     <input name="lastName" placeholder="Last Name" />
     <input name="email" placeholder="Email" />
     <textarea name="comments" placeholder="Comments" />
     <button type="submit">Submit</button>

    </form>
  );
};

export default ContactForm;