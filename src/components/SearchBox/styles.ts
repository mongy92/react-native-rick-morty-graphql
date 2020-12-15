import { StyleSheet } from 'react-native';
import { COLORS, STYLES } from '../../common';

export default StyleSheet.create({
  search: {
    height: 60,
    backgroundColor: COLORS.white,
    margin: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLORS.offWhite,
    ...STYLES.shaddow,
  },
  leftIconPlacholder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: COLORS.gray,
    padding: 5,
    flex: 1,
  },
  searchIcon: {
    marginRight: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
  },
});
