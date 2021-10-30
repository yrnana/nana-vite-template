import { css, Global } from '@emotion/react';
import Button from '~/components/Button';

const styles = css`
  body {
    margin: 0;
  }
`;

function App() {
  return (
    <div>
      <Button>버튼</Button>
      <Global styles={styles} />
    </div>
  );
}

export default App;
