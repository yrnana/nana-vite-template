import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

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
