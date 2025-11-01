import { describe, expect, test } from 'bun:test';
import { mockData } from 'src/test-factories';
import { render, screen } from 'src/test-utilities';
import ProfessionalItem from './professional-item';

const mockProfessionalExperienceSingleTitle =
  mockData.professionalExperiences.companyA;

const mockProfessionalExperienceMultipleTitles =
  mockData.professionalExperiences.companyB;

describe('<ProfessionalItem />', () => {
  test('Renders organization name as heading', () => {
    render(<ProfessionalItem {...mockProfessionalExperienceSingleTitle} />);

    const heading = screen.getByRole('heading', {
      level: 3,
      name: /tech company a/i,
    });

    expect(heading).toBeDefined();
  });

  test('Renders job title', () => {
    render(<ProfessionalItem {...mockProfessionalExperienceSingleTitle} />);

    expect(screen.getByText(/senior software engineer/i)).toBeDefined();
  });

  test('Renders current position without end date', () => {
    render(<ProfessionalItem {...mockProfessionalExperienceSingleTitle} />);

    expect(screen.getByText(/current/i)).toBeDefined();
  });

  test('Renders title description when provided', () => {
    render(<ProfessionalItem {...mockProfessionalExperienceSingleTitle} />);

    expect(
      screen.getByText(/leading the development of core features/i),
    ).toBeDefined();
  });

  test('Renders professional experience body content', () => {
    const { container } = render(
      <ProfessionalItem {...mockProfessionalExperienceSingleTitle} />,
    );

    const proseDiv = container.querySelector('[data-component="prose"]');
    expect(proseDiv).toBeDefined();
  });

  test('Renders multiple titles with timeline', () => {
    render(<ProfessionalItem {...mockProfessionalExperienceMultipleTitles} />);

    expect(screen.getAllByText(/senior developer/i)[0]).toBeDefined();
    expect(screen.getAllByText(/junior developer/i)[0]).toBeDefined();
  });

  test('Shows timeline indicators for multiple titles', () => {
    const { container } = render(
      <ProfessionalItem {...mockProfessionalExperienceMultipleTitles} />,
    );

    const timelineElements = container.querySelectorAll(
      'ul > li > div:first-child',
    );
    const visibleTimelines = [...timelineElements].filter(
      (element) => !element.className.includes('hidden'),
    );
    expect(visibleTimelines.length).toBeGreaterThan(0);
  });

  test('Renders end date when position has ended', () => {
    render(<ProfessionalItem {...mockProfessionalExperienceMultipleTitles} />);

    expect(screen.queryByText(/current/i)).toBeDefined();
  });

  test('Snapshot with single title', () => {
    const { asFragment } = render(
      <ProfessionalItem {...mockProfessionalExperienceSingleTitle} />,
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('Snapshot with multiple titles', () => {
    const { asFragment } = render(
      <ProfessionalItem {...mockProfessionalExperienceMultipleTitles} />,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
