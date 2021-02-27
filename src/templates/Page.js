import React from 'react';
import styled from 'styled-components';

const PageStyles = styled.div`
  padding: 2rem;
  font-size: 1.6rem;
`;

const Page = ({ children }) => <PageStyles>{children}</PageStyles>;

export default Page;
