import { useUserStore } from '../stores/useUserStore';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const user = useUserStore((state) => state.user);

  return user ? children : <Navigate to="/login" />;
}


