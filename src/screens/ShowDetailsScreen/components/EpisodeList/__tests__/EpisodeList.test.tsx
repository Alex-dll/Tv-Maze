import React from 'react';

import {EpisodeList} from '../EpisodeList';
import {render} from 'test-utils';
import {showMocks} from 'test/mocks/showMocks';

describe('EpisodeList', () => {
  test('show all season one episodes at first', async () => {
    const {getByText, findByText} = render(
      <EpisodeList show={showMocks.show} />,
    );

    // await waitFor(() => {
    //   getByText(mocks.episode1.name);
    // });
    await findByText(showMocks.episode1.name);

    expect(getByText(showMocks.episode1.name)).toBeTruthy();
    expect(getByText(showMocks.episode2.name)).toBeTruthy();
  });
});
