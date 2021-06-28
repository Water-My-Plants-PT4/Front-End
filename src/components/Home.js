import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="background">
      <h1>Welcome!</h1>
      <Link to="/login">
        <button className="login">Log In</button>
      </Link>
      <br />
      <Link to="/sign-up">
        <button className="login">Sign Up</button>
      </Link>
    </div>
  );
}
