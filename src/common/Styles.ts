import { StyleSheet } from 'react-native';

export const COLORS = {
  white: '#FFF',
  offWhite: '#DDD',
};
export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
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
});
