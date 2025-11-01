import { describe, expect, mock, test } from 'bun:test';
import {
  createMockProfessionalExperience,
  createMockProfessionalTitle,
  mockHelpers,
} from 'src/test-factories';
import { render, screen } from 'src/test-utilities';
import Professional from './professional';

mock.module('src/helpers/utilities', () => ({
  sortedProfessionalExperiences: [
    createMockProfessionalExperience({
      organization: 'Tech Company A',
      titles: [
        createMockProfessionalTitle({
          title: 'Senior Software Engineer',
          startDate: '2022-01-01T00:00:00.000Z',
          endDate: undefined,
          description: 'Leading development',
        }),
      ],
      body: {
        raw: 'Built scalable systems',
        html: '<p>Built scalable systems</p>',
      },
    }),
    createMockProfessionalExperience({
      _id: 'professional-experiences/company-b.md',
      _raw: {
        sourceFilePath: 'professional-experiences/company-b.md',
        sourceFileName: 'company-b.md',
        sourceFileDir: 'professional-experiences',
        contentType: 'markdown',
        flattenedPath: 'professional-experiences/company-b',
      },
      organization: 'Tech Company B',
      titles: [
        createMockProfessionalTitle({
          title: 'Junior Developer',
          startDate: '2019-06-01T00:00:00.000Z',
          endDate: '2021-12-31T00:00:00.000Z',
          description: 'Frontend development',
        }),
      ],
      body: {
        raw: 'Worked on React projects',
        html: '<p>Worked on React projects</p>',
      },
    }),
  ],
  sortedAchievements: [],
  ...mockHelpers.utilities,
}));

describe('<Professional />', () => {
  test('Renders professional experience section heading', () => {
    render(<Professional />);

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /professional experience/i,
    });

    expect(heading).toBeDefined();
  });

  test('Renders all professional experience items', () => {
    render(<Professional />);

    expect(screen.getByText(/tech company a/i)).toBeDefined();
    expect(screen.getByText(/tech company b/i)).toBeDefined();
  });

  test('Renders job titles', () => {
    render(<Professional />);

    expect(screen.getByText(/senior software engineer/i)).toBeDefined();
    expect(screen.getByText(/junior developer/i)).toBeDefined();
  });

  test('Renders separators between experiences', () => {
    const { container } = render(<Professional />);

    const separators = container.querySelectorAll('hr');
    expect(separators.length).toBeGreaterThan(0);
  });

  test('Has proper styling classes', () => {
    const { container } = render(<Professional />);

    const article = container.querySelector('article');
    expect(article?.className).toContain('rounded-xl');
    expect(article?.className).toContain('border');
    expect(article?.className).toContain('shadow-md');
  });

  test('Centers the section heading', () => {
    render(<Professional />);

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /professional experience/i,
    });

    const sectionHeadingWrapper = heading.closest('[class*="justify-center"]');
    expect(sectionHeadingWrapper).toBeDefined();
  });

  test('Renders briefcase icon', () => {
    const { container } = render(<Professional />);

    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
  });

  test('Snapshot', () => {
    const { asFragment } = render(<Professional />);
    expect(asFragment).toMatchSnapshot();
  });
});
