import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="menu">
        <h1>
          <Link to="/paymentstore">UPaymentStore</Link>
        </h1>
      </div>

      <div className="logo">
        <h1>
          <Link to="/register">register</Link>
        </h1>
      </div>
    </header>
  );
}
