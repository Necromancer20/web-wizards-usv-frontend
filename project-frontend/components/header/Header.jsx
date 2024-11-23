import React from 'react';
import { Link, useLocation } from "react-router-dom";
import Logo from "../logo/Logo";
import './Header.css';

export default function Header() {
    const location = useLocation();
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
                            <li className={`exams ${location.pathname === "/examene" ? "active" : ""}`}>
                                <Link to="/examene">
                                    Examene
                                </Link>
                            </li>
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
                    <div>
                        popescu.ion@usv.ro
                    </div>
                </div>
            </nav>
        </>
    );
}
