import React from 'react';
import { GlobalStyles } from '@material-ui/core';
import Button from '~/components/Button';

function App() {
  return (
    <div>
      <Button>버튼</Button>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
          },
        }}
      />
    </div>
  );
}

export default App;
