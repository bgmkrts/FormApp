'use client'
import React from 'react';
import { Button, Container, Box } from '@mui/material';
import TcKimlikForm from '../components/TcKimlikForm';
import AdresForm from '../components/AdresForm';
import formStore from '../../store/FormStore';

const Home = () => {
  const handleSubmit = () => {
    const formData = formStore.getFormData();
    console.log("value:", formData);   
     alert(JSON.stringify(formData)); 
  };


  const handleClear = () => {
    formStore.clearForm();
  };

  return (
    <Container maxWidth="sm">
      
      <Box>
        <TcKimlikForm />
        <AdresForm />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Gönder
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClear} style={{ marginLeft: '10px' }}>
            Temizle
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
