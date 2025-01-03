import { useEffect } from 'react';
import { useUserStore } from '../components/stores/useUserStore';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Layout from '../components/layout/Layout';
import NotFound from '../pages/not-found/NotFound';
import ExamsPage from '../pages/exams/ExamsPage';
import CalendarPage from '../pages/calendar/Calendar';
import HelpPage from '../pages/help/HelpPage';
import ProtectedRoute from '../components/protected-route/ProtectedRoute';

function App() {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="calendar" replace />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route
            path="login"
            element={user ? <Navigate to="/" replace /> : <Login />}
          />
          <Route path="examene" element={<ProtectedRoute><ExamsPage /></ProtectedRoute>} />
          <Route path="ajutor" element={<HelpPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
