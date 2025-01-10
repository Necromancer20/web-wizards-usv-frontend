import { useLocation } from 'react-router-dom';
import logoImgLight from '../../src/assets/images/image_6.png';

export default function Logo() {
  const location = useLocation();


  const logo = logoImgLight;

  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}
