import React from 'react';
import { css } from '@emotion/react';

const styles = css`
  padding: 1rem 1.5rem;
  font-size: 18px;
`;

const Button: React.FC = ({ children }) => {
  return <button css={styles}>{children}</button>;
};

export default Button;
