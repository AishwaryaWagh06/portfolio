import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  details?: string[];
}

const projects: Project[] = [
  {
    title: 'Hotel Management System - E-Commerce Website',
    description: 'A user-friendly e-commerce website that allows users to book hotels online, manage reservations, view hotel details, and make secure payments.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    details: [
      'To design and develop a user-friendly e-commerce website that allows users to book hotels online, manage reservations, view hotel details, and make secure payments, thereby streamlining the hotel booking process.',
      'Technologies Used Frontend: HTML, CSS, JavaScript, B-SQLite & Tools & Platforms: Git, GitHub, VS Code, Firebase (optional for auth)'
    ]
  },
  {
    title: 'Smart Onion Warehouse',
    description: 'An intelligent warehouse management system for onions with real-time monitoring capabilities.',
    technologies: ['IoT', 'Arduino', 'C', 'Sensors'],
    details: [
      'To develop an intelligent warehouse management system specifically for onions, aimed at reducing spoilage, optimizing storage conditions, and enabling real-time monitoring of inventory and environmental factors.',
      'Technologies Used: Hardware (if applicable): IoT Sensors (Temperature, Humidity, Gas sensors), Arduino. Software: C (for microcontroller programming)'
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <Box id="projects" py={8} bgcolor="background.paper">
      <Container>
        <Typography variant="h2" gutterBottom align="center" mb={6}>
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} key={project.title}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  {project.details && (
                    <Box sx={{ mb: 2 }}>
                      {project.details.map((detail, index) => (
                        <Typography key={index} variant="body2" paragraph>
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  )}
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ mb: 1 }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 