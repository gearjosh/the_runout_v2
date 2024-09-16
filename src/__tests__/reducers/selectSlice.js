import selectSlice from '../../reducers/selectSlice';
import constants from '../../constants';
const { initialState } = constants;

describe('selectSlice', () => {

  test('should return state unchanged if no action type recognized', () => {
    expect(selectSlice({}, {type: null})).toEqual({});
  });

  test('should return initial state unchanged if no action type recognized', () => {
    expect(selectSlice(initialState, {type: null})).toEqual(initialState);
  });

  test('should return selected album value equal to provided album id', () => {
    expect(selectSlice(initialState, {
      type: 'select/album',
      albumId: 1234
    })).toEqual(1234);
  });

});
