import { css } from '@emotion/react';

const styles = css`
  padding: 1rem 1.5rem;
  font-size: 18px;
`;

type ButtonProps = {
  children?: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <button css={styles}>{children}</button>;
};

export default Button;
