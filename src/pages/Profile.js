import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { supabase } from '../services/supabase';

const Profile = () => {
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleUpdateProfile = async () => {
    try {
      const { error } = await supabase
        .from('users')
        .update({ nickname, avatar })
        .eq('id', 'USER_ID'); // Sostituisci USER_ID con l'ID dell'utente loggato
      if (error) throw error;
      alert('Profilo aggiornato con successo!');
    } catch (error) {
      alert(error.message || 'Errore durante l'aggiornamento del profilo.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Gestisci Profilo
      </Typography>
      <TextField
        label="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdateProfile}
        sx={{ mt: 2 }}
      >
        Aggiorna Profilo
      </Button>
    </Container>
  );
};

export default Profile;