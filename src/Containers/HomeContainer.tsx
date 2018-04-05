import * as React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="container">
      <Link to="/" title="" />
      <Link to="/simple-form" title="simple" />
      <Link to="/side-by-side" title="side by side" />
      <Link to="/login" title="login" />
      <Link to="/checkout" title="checkout" />
      <Link to="/stepper" title="stepper" />
    </div>
  );
};
