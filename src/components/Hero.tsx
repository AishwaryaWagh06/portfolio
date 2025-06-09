import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Typography variant="h1" gutterBottom>
          AISHWARYA WAGH
        </Typography>
        <Typography variant="h4" color="text.secondary" paragraph>
          AI/ML ENGINEER
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: '800px' }}>
          An ambitious second-year AIML student passionate about leveraging technology for innovative problem-solving. 
          Proficient in Python, Java, and Machine Learning, with a solid grasp of programming fundamentals and AI concepts. 
          Enthusiastic about exploring new ideas, contributing to impactful projects, and gaining hands-on experience for a successful career.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mr: 2 }}
            href="#projects"
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="/resume.pdf"
            target="_blank"
          >
            Download CV
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 