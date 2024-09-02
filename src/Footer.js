import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px 0;
  color: #888;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;