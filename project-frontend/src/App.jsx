import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import Login from '../pages/login/Login';
import Layout from '../components/layout/Layout';
import NotFound from '../pages/not-found/NotFound';
import ExamsPage from '../pages/exams/ExamsPage';
import CalendarPage from '../pages/calendar/Calendar';
import HelpPage from '../pages/help/HelpPage';


function App() {
  const [count, setCount] = useState(0);
  const cheie_api = import.meta.env.VITE_API_KEY;

  return (

    <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="calendar" replace />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="login" element={<Login />} />
        <Route path="examene" element={<ExamsPage />} />
        <Route path="ajutor" element={<HelpPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
