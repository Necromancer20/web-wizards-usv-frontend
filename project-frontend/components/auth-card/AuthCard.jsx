import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../stores/useUserStore';
import axios from 'axios';

import './AuthCard.css';

export default function AuthCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const setUser = useUserStore((state) => state.setUser);

  const handleLogin = async () => {
    const url = import.meta.env.VITE_API_KEY + `/utilizator/login?email=${encodeURIComponent(email)}&parola=${encodeURIComponent(password)}`;

    try {
      const response = await axios.post(url);

      if (response.status === 200) {
        console.log('Login reușit!', response.data);
        const user = response.data;
        setUser(user);

        localStorage.setItem('user', JSON.stringify(user));

        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setError('Datele introduse sunt invalide.');
      } else {
        setError('A apărut o eroare la conectare. Încearcă din nou.');
      }
    }
  };

  return (
    <div className="auth-card">
      <h3>Login</h3>
      <div>
        <p>Email</p>
        <input
          type="text"
          placeholder="Introduceți email-ul"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <p>Parolă</p>
        <input
          type="password"
          placeholder="Introduceți parola"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <Link to='/'>INTRĂ FĂRĂ CONT</Link>
      {error && <p>{error}</p>}
    </div>
  );
}
