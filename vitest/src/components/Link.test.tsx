import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Link from './Link';

it('Link changes the class when hovered', () => {
  const { container } = render(<Link page="http://antfu.me">Anthony Fu</Link>);

  expect(container).toMatchSnapshot('default');

  const link = screen.getByRole('link');

  userEvent.hover(link);
  expect(container).toMatchSnapshot('hover');

  userEvent.unhover(link);
  expect(container).toMatchSnapshot('unhover');
});
