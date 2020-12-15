import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';

export default StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  titleStyle: {
    color: COLORS.dark,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    flex: 1,
  },
  valueStyle: {
    flexShrink: 1,
    flex: 3,
    color: COLORS.dark,
    textAlign: 'left',
    fontSize: 16,
  },
});
