import { StyleSheet } from 'react-native';
import { COLORS, STYLES } from '../../common';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    ...STYLES.shaddow,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  name: {
    fontSize: 17,
    flex: 1,
    marginRight: 20,
  },
  icon: {
    right: 20,
    position: 'absolute',
  },
});
