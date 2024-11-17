import { Link } from "react-router-dom"

export default function AuthCard() {
    return(
        <>
        <h3>Login</h3>
        <div>
            <p>Email</p>
            <input type="text"/>
        </div>
        <div>
            <p>Parolă</p>
            <input type="text"/>
        </div>
        <button>Login</button>
        <Link to="/examene">
        <p>ACCESEAZĂ FĂRĂ CONT</p>
        </Link>

        </>
    )
}