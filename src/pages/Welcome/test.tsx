import React from 'react';
import { renderWithTheme } from '../../utils/tests/helpers';
import 'jest-styled-components';

import Welcome from '.';

test('<Welcome />', () => {
  const { toJSON } = renderWithTheme(<Welcome />);
  expect(toJSON).toMatchSnapshot();
});
