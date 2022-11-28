/* eslint-disable no-undef */
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

/**
 * This is a simple test desing for example of implementation
 */
import { render, screen /*, userEvent*/ } from '#setup/test/utils';

import Home from './index';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(screen.getByText(/Home Page with links/i)).toBeInTheDocument();
  });
});
