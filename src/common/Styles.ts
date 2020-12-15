import { StyleSheet } from 'react-native';

export const COLORS = {
  white: '#FFF',
  offWhite: '#DFDFDF',
  gray: '#888',
  dark: '#222',
  black: '#000',
  green: 'green',
  red: 'red',

  koromike: '#ffba5e',
};
export const STYLES = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
    borderTopColor: COLORS.offWhite,
  },
  errorText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  shaddow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export const ACTIVE_OPCITY = 0.7;
