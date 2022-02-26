import React from 'react';
import { render } from '../../test/testUtils';
import Section from './Section';

jest.mock('next/router', () => require('next-router-mock'));

describe('<Section />', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('Matches the snapshot', () => {
    const { container } = render(
      <Section color="alternate">
        <div>Test</div>
      </Section>,
    );
    expect(container).toMatchSnapshot();
  });
});
