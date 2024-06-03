import React, { useState } from 'react';
import styled from 'styled-components';

const NewsContainer = styled.section`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 900px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 60px;
  }
`;

const NewsList = styled.ul`
  list-style-type: none;
`;

const NewsItem = styled.li`
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 20px;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NewsImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Date = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Content = styled.p`
  margin-bottom: 15px;
`;

const NewsFeed = () => {
  const [news] = useState([
    { 
      title: 'Release Date Announced', 
      date: 'June 1, 2024', 
      content: 'TechWave XR will be released on June 1, 2024. Stay tuned for the launch event and pre-order details.',
      image: '/img/img6.jpeg'
    },
    { 
      title: 'TechWave XR Wins Award', 
      date: 'May 20, 2024', 
      content: 'TechWave XR has been awarded the Best Augmented Reality Device of the Year by Tech Magazine.',
      image: '/img/img3.jpeg'
    },
    { 
      title: 'TechWave XR Featured in Tech Expo', 
      date: 'April 10, 2024', 
      content: 'TechWave XR showcased its latest features and innovations at the annual Tech Expo. Attendees were impressed by its capabilities.',
      image: '/img/img4.jpeg'
    },
  ]);

  return (
    <NewsContainer>
      <h2>Latest News</h2>
      <NewsList>
        {news.map((item, index) => (
          <NewsItem key={index}>
            <NewsImage src={item.image} alt={item.title} />
            <div>
              <Title>{item.title}</Title>
              <Date>{item.date}</Date>
              <Content>{item.content}</Content>
            </div>
          </NewsItem>
        ))}
      </NewsList>
    </NewsContainer>
  );
};

export default NewsFeed;
