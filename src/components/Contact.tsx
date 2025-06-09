import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      text: 'ashwaryawagh@gmail.com',
      link: 'mailto:ashwaryawagh@gmail.com',
    },
    {
      icon: <PhoneIcon />,
      text: '+91 9921227342',
      link: 'tel:+919921227342',
    },
    {
      icon: <LocationOnIcon />,
      text: 'Kopargaon, Ahilyanagar',
      link: 'https://maps.google.com/?q=Kopargaon,Ahilyanagar',
    },
    {
      icon: <LinkedInIcon />,
      text: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/in/aishwarya-wagh-460355366/',
    },
    {
      icon: <GitHubIcon />,
      text: 'GitHub Profile',
      link: 'https://github.com/AishwaryaW',
    }
  ];

  return (
    <Box id="contact" py={8} bgcolor="background.default">
      <Container>
        <Typography variant="h2" gutterBottom align="center" mb={6}>
          Get in Touch
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              {contactInfo.map((info) => (
                <Paper
                  key={info.text}
                  elevation={3}
                  sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  {info.icon}
                  <Typography
                    component="a"
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {info.text}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 