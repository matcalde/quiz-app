import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('users').select();
      if (error) console.error(error);
      else setUsers(data || []);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Pannello di Amministrazione</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email} - {user.role}
            <button onClick={() => alert('Elimina utente')}>Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;