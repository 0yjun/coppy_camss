import React from 'react';
import styled from 'styled-components';

const TemplateBlockBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: gray;
  display: flex;
  flex-direction: column;
  justify-center: center;
  align-items: center;
`;

const TemplateBlock = ({ children }) => {
  return <TemplateBlockBlock>{children}</TemplateBlockBlock>;
};
export default TemplateBlock;
