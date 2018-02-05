import * as React from 'react';
import { Container } from 'semantic-ui-react';

interface CoreLayoutProps {
  children: any;
}

const CoreLayout = ({children}: CoreLayoutProps) => (
  <Container 
    fluid
    style={{
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    {/* <Header/> */}
    <Container
      style={{
        marginTop: '3.5em',
        marginBottom: '3.5em',
        flexGrow: 1
      }}
    >
      {children}
    </Container>
    {/* <Footer/> */}
  </Container>
);

export default CoreLayout;
