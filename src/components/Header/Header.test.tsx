import { getCMSIntegration } from '../../cms-integration/getCMSIntegration';
import { render } from '../../test-utils';
import { Header } from './Header';

describe('<Header />', () => {
  test('Snapshot', async () => {
    const data = await getCMSIntegration('markdown');
    const { container } = render(
      <Header personalInformation={data.personalInformation} />,
    );
    expect(container).toMatchSnapshot();
  });
});
