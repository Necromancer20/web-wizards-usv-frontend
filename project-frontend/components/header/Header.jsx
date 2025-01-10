import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import Logo from "../logo/Logo";
import './Header.css';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const setUser = useUserStore((state) => state.setUser);
    const user = useUserStore((state) => state.user);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/login');
    };

    const logoClass = location.pathname === "/login" ? "login-page" : "";

    return (
        <>
            <nav className={logoClass}>
                <div className="header-logo left-side">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div className="right-side">
                    <div className="nav-items">
                        <ul>
                            {user&&<li className={`exams ${location.pathname === "/examene" ? "active" : ""}`}>
                                <Link to="/examene">
                                    Examene
                                </Link>
                            </li>}
                            <li className={`calendar ${location.pathname === "/calendar" ? "active" : ""}`}>
                                <Link to="/calendar">
                                    Calendar
                                </Link>
                            </li>
                            <li className={`help ${location.pathname === "/ajutor" ? "active" : ""}`}>
                                <Link to="/ajutor">
                                    Ajutor
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='user-block'>
                        {user?.email && <span className='user-email'>{user.email}</span>}
                        {user?<button onClick={handleLogout}>Deconectare</button>:<Link className='login-button' to='/login'>Login</Link>}
                    </div>
                </div>
            </nav>
        </>
    );
}
