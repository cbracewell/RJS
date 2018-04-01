import * as React from 'react';
import Header from '../HeaderLayout';
interface CoreLayoutProps {
  children: any;
}

const CoreLayout = ({children}: CoreLayoutProps) => (
  <div className="container">
    <Header/>
      <div>
      {children}
      </div>
    {/* <Footer/> */}
  </div>
);

export default CoreLayout;
