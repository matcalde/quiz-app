import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { supabase } from '../services/supabase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      alert('Login avvenuto con successo!');
    } catch (error) {
      alert(error.message || 'Errore durante il login.');
    }
  };

  const handleRegister = async () => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      alert('Registrazione avvenuta con successo! Conferma l'email.');
    } catch (error) {
      alert(error.message || 'Errore durante la registrazione.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleRegister}
          sx={{ mt: 2 }}
        >
          Registrati
        </Button>
      </Box>
    </Container>
  );
};

export default Login;