import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';

export default StyleSheet.create({
  search: {
    height: 60,
    backgroundColor: COLORS.white,
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
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
