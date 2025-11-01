import { describe, expect, test } from 'bun:test';
import { createMockAchievement, mockData } from 'src/test-factories';
import { render, screen } from 'src/test-utilities';
import AchievementItem from './achievement-item';

const mockAchievement = createMockAchievement();

describe('<AchievementItem />', () => {
  test('Renders achievement title as heading', () => {
    render(<AchievementItem {...mockAchievement} />);

    const heading = screen.getByRole('heading', {
      level: 3,
      name: /bachelor of science in computer science/i,
    });

    expect(heading).toBeDefined();
  });

  test('Renders organization and completion year', () => {
    render(<AchievementItem {...mockAchievement} />);

    expect(screen.getByText(/university of technology/i)).toBeDefined();
    expect(screen.getByText(/2020/i)).toBeDefined();
  });

  test('Renders achievement body content', () => {
    const { container } = render(<AchievementItem {...mockAchievement} />);

    const proseDiv = container.querySelector('[data-component="prose"]');
    expect(proseDiv).toBeDefined();
  });

  test('Renders academic cap icon', () => {
    const { container } = render(<AchievementItem {...mockAchievement} />);

    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
  });

  test('Snapshot', () => {
    const { asFragment } = render(<AchievementItem {...mockAchievement} />);
    expect(asFragment).toMatchSnapshot();
  });

  test('Snapshot with different achievement data', () => {
    const { asFragment } = render(
      <AchievementItem {...mockData.achievements.certification} />,
    );
    expect(asFragment).toMatchSnapshot();
  });
});
