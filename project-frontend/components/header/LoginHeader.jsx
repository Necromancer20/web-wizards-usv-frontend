import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

export default function LoginHeader() {
  return (
    <header className="login-header">
      <Link to="/">
        <Logo/>
      </Link>
    </header>
  );
}
