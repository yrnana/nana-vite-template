import { css } from '@emotion/react';

const styles = css`
  padding: 1rem 1.5rem;
  border-radius: 10px;
  border: 0;
  background: #000;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;

type ButtonProps = {
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button css={styles}>{children}</button>;
};

export default Button;
