import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Modal from '../../CustomComponents/Modal';

interface MenuItem {
  url: string;
  label: string;
}

const generateNav = (items: MenuItem[]) =>
  items.map(({ url, label }, index) => (
    <li key={index} className="nav-item active">
      <NavLink className="nav-link" to={url}>
        {label}
      </NavLink>
    </li>
  ));

const links: MenuItem[] = [
  { url: '/simple-form', label: 'Simple' },
  { url: '/side-by-side', label: 'SideBySide' },
  { url: '/login', label: 'Login' },
  { url: '/stepper', label: 'Stepper' },
  { url: '/checkout', label: 'Checkout' }
];

export default () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      React JSON Schema
    </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">{generateNav(links)}</ul>
    </div>
  </nav>
);
