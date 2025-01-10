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

  const handleLogin = async (e) => {
    e.preventDefault();
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
      if (error.response && error.response.status === 404) {
        setError('Datele introduse sunt invalide.');
      } else if(email==="" && password === ""){
        setError('Introdu atât emailul cât și parola.');
      }
       else {
        setError('A apărut o eroare la conectare. Încearcă din nou.');
      }
    }
  };

  return (
    <form className="auth-card">
      <h3>Bine ai venit</h3>
      <div>
        <p>Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <p>Parolă</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <Link to='/'>ACCESEAZĂ FĂRĂ CONT</Link>
      {error && <p>{error}</p>}
    </form>
  );
}
