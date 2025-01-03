import { useUserStore } from "../stores/useUserStore";

const handleLogout = () => {
  const logout = useUserStore((state) => state.logout);

  logout();
  localStorage.removeItem('user');
  navigate('/login'); 
};

export default handleLogout;