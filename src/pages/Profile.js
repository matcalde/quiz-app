import React, { useState } from 'react';
import { supabase } from '../../services/supabase';

const Profile = () => {
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleUpdateProfile = async () => {
    const { error } = await supabase
      .from('users')
      .update({ nickname, avatar })
      .eq('id', 'USER_ID'); // Sostituisci USER_ID con l'ID dell'utente loggato
    if (error) console.error(error);
  };

  return (
    <div>
      <h1>Gestisci Profilo</h1>
      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <button onClick={handleUpdateProfile}>Aggiorna Profilo</button>
    </div>
  );
};

export default Profile;