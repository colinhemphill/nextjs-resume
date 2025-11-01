import { describe, expect, mock, test } from 'bun:test';
import { mockData, mockHelpers } from 'src/test-factories';
import { render, screen } from 'src/test-utilities';
import Achievements from './achievements';

mock.module('src/helpers/utilities', () => ({
  sortedAchievements: [
    mockData.achievements.certification,
    mockData.achievements.degree,
  ],
  sortedProfessionalExperiences: [],
  ...mockHelpers.utilities,
}));

describe('<Achievements />', () => {
  test('Renders achievements section heading', () => {
    render(<Achievements />);

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /achievements/i,
    });

    expect(heading).toBeDefined();
  });

  test('Renders all achievement items', () => {
    render(<Achievements />);

    expect(
      screen.getByText(/aws certified solutions architect/i),
    ).toBeDefined();
    expect(
      screen.getByText(/bachelor of science in computer science/i),
    ).toBeDefined();
  });

  test('Renders achievement organizations', () => {
    render(<Achievements />);

    expect(screen.getByText(/amazon web services/i)).toBeDefined();
    expect(screen.getByText(/university of technology/i)).toBeDefined();
  });

  test('Renders separators between achievements', () => {
    const { container } = render(<Achievements />);

    const separators = container.querySelectorAll('hr');
    expect(separators.length).toBeGreaterThan(0);
  });

  test('Has proper styling classes', () => {
    const { container } = render(<Achievements />);

    const article = container.querySelector('article');
    expect(article?.className).toContain('rounded-xl');
    expect(article?.className).toContain('border');
    expect(article?.className).toContain('shadow-md');
  });

  test('Snapshot', () => {
    const { asFragment } = render(<Achievements />);
    expect(asFragment).toMatchSnapshot();
  });
});
