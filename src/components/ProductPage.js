import React from 'react';
import styled from 'styled-components';
import productImage from '../assets/images/product.jpg';
import productVideo from '../assets/videos/product.mp4';

const ProductContainer = styled.section`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 60px;
  }
`;

const MediaGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  img, video {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  video {
    margin-top: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const Description = styled.div`
  max-width: 600px;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
    width: 50%;
    padding-left: 40px;
  }
`;

const ProductPage = () => (
  <ProductContainer>
    <MediaGallery>
      <img src={productImage} alt="TechWave XR" />
      <video controls>
        <source src={productVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </MediaGallery>
    <Description>
      <h1>TechWave XR</h1>
      <p>TechWave XR is at the cutting edge of augmented reality technology, offering an immersive experience for all users. Features include high-resolution display, advanced tracking sensors, and seamless integration with various applications.</p>
    </Description>
  </ProductContainer>
);

export default ProductPage;
