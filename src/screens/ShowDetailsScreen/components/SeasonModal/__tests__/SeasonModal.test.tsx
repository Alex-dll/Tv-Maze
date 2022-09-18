import React, {createRef} from 'react';
import {render, act, fireEvent} from '@testing-library/react-native';

import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';

describe('SeasonModal', () => {
  test('show all seasons option', () => {
    const modalizeRef = createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={season => console.log(season)}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText(/Season/i).length).toBe(3);
  });

  test('call onSelelctSeason with correct season when season option was pressed', () => {
    const modalizeRef = createRef<Modalize>();

    const onSelectSeasonMock = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        seasons={['1', '2', '3']}
        selectedSeason="1"
        onSelectSeason={onSelectSeasonMock}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    const season2Element = getByText(/season 2/i);

    fireEvent.press(season2Element);

    expect(onSelectSeasonMock).toBeCalledWith('2');
  });
});
