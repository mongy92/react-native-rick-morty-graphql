import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../common';
const { height } = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  image: {
    height: height * 0.5,
    width: '100%',
  },
  nameWithStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginVertical: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: COLORS.dark,
    marginHorizontal: 10,
  },
  statusText: {
    fontSize: 16,
    color: COLORS.green,
    fontWeight: '500',
  },
  deadStatusText: {
    color: COLORS.red,
  },
  status: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.green,
  },
  deadStatus: {
    backgroundColor: COLORS.red,
  },
  separator: {
    borderTopColor: COLORS.offWhite,
    borderTopWidth: 1,
  },
  infoText: {
    color: COLORS.dark,
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
    marginBottom: 10,
  },
  episodesHeaderText: {
    color: COLORS.dark,
    backgroundColor: COLORS.offWhite,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
