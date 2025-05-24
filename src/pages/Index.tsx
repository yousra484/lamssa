import React from 'react';
import  Header from '@/components/Header';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import FeaturedArtisans from '@/components/FeaturedArtisans';
import StoryCarousel from '@/components/StoryCarousel';
import ContactSection from '@/components/ContactSection';


const Index = () => {
  return (
    <Layout>
      <div className="bg-white font-arabic">
        <Hero />
        <FeaturedProducts />
        <FeaturedArtisans />
        <StoryCarousel />
        <ContactSection /> 
        
      </div>
    </Layout>
  );
};

export default Index;
