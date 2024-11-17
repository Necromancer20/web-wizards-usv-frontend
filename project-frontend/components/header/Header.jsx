import Logo from "../logo/Logo"
import { Link } from "react-router-dom"
import './Header.css';

export default function Header() {

    const logoClass = location.pathname === "/login" ? "login-page" : "";

    return (
        <>
            <nav className={logoClass}>
                <div className="header-logo left-side">
                <Logo/>
                </div>
                <div className="right-side">
                    <div className="nav-items">
                        <ul>
                            <li className="exams">
                                <Link to="/examene">
                                    Examene
                                </Link>
                            </li>
                            <li className="calendar">
                                <Link to="/calendar">
                                    Calendar
                                </Link>
                            </li>
                            <li className="help">
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
    )

}