import { allSkills } from '@content';
import { describe, expect, test } from 'bun:test';
import { render, screen } from 'src/test-utilities';
import Skills from './skills';

describe('<Skills />', () => {
  test('Renders skills section heading', () => {
    render(<Skills />);

    const heading = screen.getByRole('heading', {
      level: 3,
    });

    expect(heading).toBeDefined();
    expect(heading.textContent).toContain('Skills');
    expect(heading.textContent).toContain('Expertise');
  });

  test('Renders all skills from content', () => {
    const { container } = render(<Skills />);

    const skillHeadings = container.querySelectorAll('h4');
    expect(skillHeadings.length).toBe(allSkills.length);
  });

  test('Renders skill titles', () => {
    render(<Skills />);

    for (const skill of allSkills) {
      expect(screen.getByText(skill.title)).toBeDefined();
    }
  });

  test('Renders star ratings for each skill', () => {
    const { container } = render(<Skills />);

    const starRatings = container.querySelectorAll('[class*="star"]');
    expect(starRatings.length).toBeGreaterThanOrEqual(0);
  });

  test('Star ratings are in descending order', () => {
    const { container } = render(<Skills />);

    const skillDivs = container.querySelectorAll('.space-y-2');
    expect(skillDivs.length).toBe(allSkills.length);
  });

  test('Renders skill body content', () => {
    const { container } = render(<Skills />);

    const proseDivs = container.querySelectorAll('.prose');
    expect(proseDivs.length).toBe(allSkills.length);
  });

  test('Has proper grid layout', () => {
    const { container } = render(<Skills />);

    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toBeDefined();
    expect(gridContainer?.className).toContain('grid-flow-row');
    expect(gridContainer?.className).toContain('lg:grid-flow-col');
  });

  test('Has responsive column span', () => {
    const { container } = render(<Skills />);

    const article = container.querySelector('article');
    expect(article?.className).toContain('md:col-span-2');
  });

  test('Renders check icon', () => {
    const { container } = render(<Skills />);

    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
  });

  test('Skill content has muted text color', () => {
    const { container } = render(<Skills />);

    const proseDivs = container.querySelectorAll('[data-component="prose"]');
    for (const div of proseDivs) {
      expect(div.className).toContain('text-neutral-11');
    }
  });

  test('Snapshot', () => {
    const { asFragment } = render(<Skills />);
    expect(asFragment).toMatchSnapshot();
  });
});
