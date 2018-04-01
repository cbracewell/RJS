import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItem {
  url: string;
  label: string;
}

const generateNav = (items: MenuItem[]) => items.map(({ url, label }, index) => (
  <li key={index} className="nav-item active">
    <NavLink className="nav-link" to={url}>{label}</NavLink>
  </li>
));

const links: MenuItem[] = [
  {url: '/', label: 'Home'},
  {url: '/basic-form', label: 'Basic'},
  {url: '/login', label: 'Login'},
  {url: '/stepper', label: 'Stepper'},
];

export default () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">React JSON Schema</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        {generateNav(links)}
      </ul>
    </div>
  </nav>
);
