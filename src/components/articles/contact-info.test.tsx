import { personal } from '@content';
import { describe, expect, test } from 'bun:test';
import { mockData } from 'src/test-factories';
import { render, screen } from 'src/test-utilities';
import ContactInformation from './contact-info';

const mockPrivateFields = [
  mockData.privateFields.email,
  mockData.privateFields.phone,
];

describe('<ContactInformation />', () => {
  test('Renders contact information heading', () => {
    render(<ContactInformation />);

    const heading = screen.getByRole('heading', {
      level: 3,
      name: /contact information/i,
    });

    expect(heading).toBeDefined();
  });

  test('Renders location from personal data', () => {
    render(<ContactInformation />);

    expect(screen.getByText(/location:/i)).toBeDefined();
    expect(screen.getByText(personal.location)).toBeDefined();
  });

  test('Renders LinkedIn link when URL is provided', () => {
    render(<ContactInformation />);

    if (personal.linkedInUrl) {
      const linkedInLink = screen.getByRole('link', { name: /linkedin/i });
      expect(linkedInLink).toBeDefined();
      expect(linkedInLink.getAttribute('href')).toBe(personal.linkedInUrl);
    }
  });

  test('Renders GitHub link when URL is provided', () => {
    render(<ContactInformation />);

    if (personal.githubUrl) {
      const githubLink = screen.getByRole('link', { name: /github/i });
      expect(githubLink).toBeDefined();
      expect(githubLink.getAttribute('href')).toBe(personal.githubUrl);
    }
  });

  test('Renders private information when provided', () => {
    render(<ContactInformation privateInformation={mockPrivateFields} />);

    expect(screen.getByText(/email:/i)).toBeDefined();
    expect(screen.getByText(/phone:/i)).toBeDefined();
  });

  test('Does not render private information when not provided', () => {
    render(<ContactInformation />);

    expect(screen.queryByText(/email:/i)).toBeNull();
    expect(screen.queryByText(/phone:/i)).toBeNull();
  });

  test('Private fields render with dangerouslySetInnerHTML', () => {
    const { container } = render(
      <ContactInformation privateInformation={mockPrivateFields} />,
    );

    const listItems = container.querySelectorAll('li');
    const hasPrivateFieldContent = [...listItems].some(
      (li) =>
        li.textContent?.includes('Email:') ||
        li.textContent?.includes('Phone:'),
    );

    expect(hasPrivateFieldContent).toBe(true);
  });

  test('Social media links have proper styling', () => {
    const { container } = render(<ContactInformation />);

    const socialLinks = container.querySelectorAll('a');
    for (const link of socialLinks) {
      expect(link.className).toContain('inline-flex');
      expect(link.className).toContain('items-center');
      expect(link.className).toContain('gap-2');
    }
  });

  test('Snapshot without private information', () => {
    const { asFragment } = render(<ContactInformation />);
    expect(asFragment).toMatchSnapshot();
  });

  test('Snapshot with private information', () => {
    const { asFragment } = render(
      <ContactInformation privateInformation={mockPrivateFields} />,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
