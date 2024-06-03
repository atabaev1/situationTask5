import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  padding: 40px 20px;
  text-align: center;
`;

const NotFoundPage = () => (
  <NotFoundContainer>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </NotFoundContainer>
);

export default NotFoundPage;
