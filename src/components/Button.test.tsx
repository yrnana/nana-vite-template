import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('버튼', () => {
  it('이전 스냅샷과 일치한다.', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });

  it('버튼이 존재한다.', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
