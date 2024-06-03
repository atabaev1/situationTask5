import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactInformation = () => (
  <ContactContainer className="contact-info my-5">
    <h2>Contact Us</h2>
    <p>Email: <a href="mailto:contact@techwave.com">contact@techwave.com</a></p>
    <p>Phone: <a href="tel:+99655409666">+996-554-096-666</a></p>
    <p>Address: 123 TechWave Street, Tech City, TC 12345</p>
  </ContactContainer>
);

export default ContactInformation;
