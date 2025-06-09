import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'C++'],
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'SQL'],
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Arduino'],
  },
  {
    title: 'Soft Skills',
    skills: ['Time Management', 'Teamwork', 'Problem Solving', 'Communication'],
  },
];

interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

const educationDetails: Education[] = [
  {
    degree: 'B.Tech in CSE (AIML)',
    institution: 'Sanjivani K. B. P. Polytechnic, Kopargaon',
    year: '2024 - 2027',
    score: 'CGPA: 6.54 (2nd Year)',
  },
  {
    degree: 'Diploma in CSE',
    institution: 'Sanjivani K. B. P. Polytechnic, Kopargaon',
    year: '2021 - 2024',
    score: 'Percentage: 70.00%',
  },
  {
    degree: 'SSC',
    institution: 'Seva Niketan Convent School, Kopargaon',
    year: '2020 - 2021',
    score: 'Percentage: 85.00%',
  },
];

const About: React.FC = () => {
  return (
    <Box id="about" py={8} bgcolor="background.default">
      <Container>
        <Typography variant="h2" gutterBottom align="center" mb={6}>
          About Me
        </Typography>

        <Typography variant="h4" gutterBottom mb={4}>
          Education
        </Typography>
        <Grid container spacing={3} mb={6}>
          {educationDetails.map((edu) => (
            <Grid item xs={12} key={edu.degree}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom color="primary">
                  {edu.degree}
                </Typography>
                <Typography variant="body1">{edu.institution}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.score}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" gutterBottom mb={4}>
          Skills
        </Typography>
        <Grid container spacing={4}>
          {skillCategories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.title}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom color="primary">
                  {category.title}
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {category.skills.map((skill) => (
                    <Typography
                      component="li"
                      key={skill}
                      variant="body2"
                      sx={{ mb: 1 }}
                    >
                      {skill}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 