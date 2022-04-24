import { Button as MuiButton } from '@mui/material';

type ButtonProps = {
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <MuiButton
      variant="contained"
      size="large"
      sx={{
        fontSize: 18,
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
