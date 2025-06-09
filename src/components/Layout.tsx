import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Layout: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Container>
    </Box>
  );
};

export default Layout; 