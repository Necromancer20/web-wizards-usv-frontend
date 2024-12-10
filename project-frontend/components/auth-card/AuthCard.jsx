import { Link } from "react-router-dom"
import "./AuthCard.css";

export default function AuthCard() {
    return(
        <div className="auth-card">
            <h3>Login</h3>
            <div>
                <p>Email</p>
                <input type="text" placeholder="Introduceți email-ul" />
            </div>
            <div>
                <p>Parolă</p>
                <input type="password" placeholder="Introduceți parola" />
            </div>
            <button>Login</button>
            <Link to="/examene">
                <p>ACCESEAZĂ FĂRĂ CONT</p>
            </Link>
        </div>
    )
}