import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  name: {
    fontSize: 17,
  },
});
