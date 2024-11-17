import { useLocation } from 'react-router-dom';
import logoImgLight from '../../src/assets/images/image_6.png';
import logoImgDark from '../../src/assets/images/logo-dark.png';

export default function Logo() {
  const location = useLocation();


  const logo = location.pathname === "/login" ? logoImgDark : logoImgLight;

  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}
