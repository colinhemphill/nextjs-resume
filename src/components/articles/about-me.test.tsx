import { describe, expect, test } from 'bun:test';
import { createMockSalary } from 'src/test-factories';
import { render, screen } from 'src/test-utilities';
import AboutMe from './about-me';

describe('<AboutMe />', () => {
  test('Renders about me section without salary', () => {
    render(<AboutMe />);

    const heading = screen.getByRole('heading', {
      level: 3,
      name: /about me/i,
    });

    expect(heading).toBeDefined();
  });

  test('Renders personal information from content', () => {
    const { container } = render(<AboutMe />);

    const proseDiv = container.querySelector('[data-component="prose"]');
    expect(proseDiv).toBeDefined();
  });

  test('Renders salary information when provided', () => {
    const mockSalary = createMockSalary();

    render(<AboutMe salary={mockSalary} />);

    expect(screen.getByText(/current salary:/i)).toBeDefined();
    expect(screen.getByText('$100,000')).toBeDefined();
    expect(screen.getByText(/desired salary:/i)).toBeDefined();
    expect(screen.getByText('$120,000')).toBeDefined();
  });

  test('Renders only current salary when desired salary is not provided', () => {
    const mockSalary = createMockSalary({ desiredSalary: undefined });

    render(<AboutMe salary={mockSalary} />);

    expect(screen.getByText(/current salary:/i)).toBeDefined();
    expect(screen.getByText('$100,000')).toBeDefined();
    expect(screen.queryByText(/desired salary:/i)).toBeNull();
  });

  test('Renders only desired salary when current salary is not provided', () => {
    const mockSalary = createMockSalary({ currentSalary: undefined });

    render(<AboutMe salary={mockSalary} />);

    expect(screen.queryByText(/current salary:/i)).toBeNull();
    expect(screen.getByText(/desired salary:/i)).toBeDefined();
    expect(screen.getByText('$120,000')).toBeDefined();
  });

  test('Does not render salary section when salary is undefined', () => {
    render(<AboutMe />);

    expect(screen.queryByText(/current salary:/i)).toBeNull();
    expect(screen.queryByText(/desired salary:/i)).toBeNull();
  });

  test('Snapshot without salary', () => {
    const { asFragment } = render(<AboutMe />);
    expect(asFragment).toMatchSnapshot();
  });

  test('Snapshot with full salary information', () => {
    const mockSalary = createMockSalary();

    const { asFragment } = render(<AboutMe salary={mockSalary} />);
    expect(asFragment).toMatchSnapshot();
  });
});
