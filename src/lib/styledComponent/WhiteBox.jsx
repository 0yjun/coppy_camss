import React from 'react';
import styled from 'styled-components';

const WhiteBoxBlock = styled.div`
  .logo-area {
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  background: white;
  width: 50%;
`;

const WhiteBox = ({ children }) => {
  return <WhiteBoxBlock>{children}</WhiteBoxBlock>;
};
export default WhiteBox;
