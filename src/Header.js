import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 40px 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #666;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Elton Chun-Chai Li</Title>
      <Subtitle>MPhil student in Computer Science</Subtitle>
    </HeaderContainer>
  );
}

export default Header;