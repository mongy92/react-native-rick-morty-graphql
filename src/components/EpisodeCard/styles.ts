import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';

export default StyleSheet.create({
  card: {
    padding: 10,
    borderBottomColor: COLORS.offWhite,
    borderBottomWidth: 2,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
  },
  countText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginTop: 10,
  },
});
