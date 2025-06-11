import React from 'react';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Categories from '../components/Home/Categories';
import Review from '../components/Home/Review';
import Customers from '../components/Home/Customers';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Features />
      <Customers />
      <Review />
    </div>
  );
};

export default Home;