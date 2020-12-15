import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';

export default StyleSheet.create({
  list: {
    paddingBottom: 40,
    padding: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },

  noMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  noMoreText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
  },
  topText: {
    fontWeight: 'bold',
  },
  indicator: {
    padding: 10,
  },
  upIcon: {
    backgroundColor: COLORS.koromike,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
