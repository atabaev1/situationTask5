import React from 'react';
import styled from 'styled-components';
import ProductPage from '../components/ProductPage';
import OrderForm from '../components/OrderForm';
import NewsFeed from '../components/NewsFeed';
import ContactInformation from '../components/ContactInformation';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => (
  <HomePageContainer>
    <ProductPage />
    
    <NewsFeed />
    <OrderForm />
    <ContactInformation />
  </HomePageContainer>
);

export default HomePage;
