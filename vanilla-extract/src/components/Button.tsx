import * as styles from './Button.css';

const Button: React.FC = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
