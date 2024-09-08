import React from 'react';
import styled from 'styled-components';

const PublicationsContainer = styled.div`
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Card = styled.div`
  border-radius: 18px;
  padding: 0px 0px 16px 0px;
`;

function Publications() {
  return (
    <PublicationsContainer>
      <Title>Publications</Title>
      <Card>
      to be continued...
      </Card>
    </PublicationsContainer>
  );
}

export default Publications;