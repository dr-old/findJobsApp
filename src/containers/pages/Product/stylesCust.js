import {PixelRatio, Platform, StyleSheet} from 'react-native';
import {color, styles} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  iconLocation: {flexDirection: 'row', marginTop: 5},
  image: {
    resizeMode: 'cover',
    height: 250,
  },
  button: {marginHorizontal: 30, marginVertical: 30},
  buttonFloat: {
    position: 'absolute',
    left: 0,
    top: 30.9,
    marginLeft: 30,
    zIndex: 2,
  },
  cardDesc: {
    marginHorizontal: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: color.white,
    borderRadius: 15,
  },
  a: {
    color: color.bluep, // make links coloured pink
  },
  p: {
    color: color.tgrey,
    padding: 0,
    margin: 0,
    fontFamily: 'Poppins-Regular',
  },
  li: {
    color: color.tgrey,
    padding: 0,
    margin: 0,
    fontFamily: 'Poppins-Regular',
  },
  strong: {
    color: color.tblack,
    fontFamily: 'Poppins-Medium',
  },
});

export default stylesCust;
