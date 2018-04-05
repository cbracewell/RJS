import * as React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="container">
    <h3>Examples</h3>
    <ul>
      <li className="list-item"><Link to="/simple-form">Simple</Link></li>
      <li className="list-item"><Link to="/side-by-side">Side by side</Link></li>
      <li className="list-item"><Link to="/login">Login</Link></li>
      <li className="list-item"><Link to="/checkout">Checkout</Link></li>
      <li className="list-item"><Link to="/stepper">Stepper</Link></li>
      </ul>
    </div>
  );
};
