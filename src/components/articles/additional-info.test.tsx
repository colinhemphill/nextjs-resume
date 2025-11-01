import { additionalInfo } from '@content';
import { describe, expect, test } from 'bun:test';
import { render, screen } from 'src/test-utilities';
import AdditionalInfo from './additional-info';

describe('<AdditionalInfo />', () => {
  test('Renders additional info section heading', () => {
    render(<AdditionalInfo />);

    const heading = screen.getByRole('heading', {
      level: 2,
      name: additionalInfo.title,
    });

    expect(heading).toBeDefined();
  });

  test('Renders additional info content', () => {
    const { container } = render(<AdditionalInfo />);

    const proseDiv = container.querySelector('[data-component="prose"]');
    expect(proseDiv).toBeDefined();
  });

  test('Renders paint brush icon', () => {
    const { container } = render(<AdditionalInfo />);

    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
  });

  test('Has proper layout classes', () => {
    const { container } = render(<AdditionalInfo />);

    const article = container.querySelector('article');
    expect(article?.className).toContain('space-y-8');
    expect(article?.className).toContain('py-12');
  });

  test('Centers the section heading', () => {
    const { container } = render(<AdditionalInfo />);

    const headingWrapper = container.querySelector('.flex.justify-center');
    expect(headingWrapper).toBeDefined();
  });

  test('Snapshot', () => {
    const { asFragment } = render(<AdditionalInfo />);
    expect(asFragment).toMatchSnapshot();
  });
});
