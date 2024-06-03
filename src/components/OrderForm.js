import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.section`
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  max-width: 500px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 60px;
  }
`;

const FormField = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
`;

const OrderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      alert('Pre-order submitted successfully!');
    } else {
      setErrors(errors);
    }
  };

  return (
    <FormContainer>
      <h2>Pre-order TechWave XR</h2>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormField>
        <FormField>
          <Label>Number of Devices</Label>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
        </FormField>
        <Button type="submit">Pre-order</Button>
      </form>
    </FormContainer>
  );
};

export default OrderForm;
