import { Button as MuiButton } from '@mui/material';

const Button: React.FC = ({ children }) => {
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
