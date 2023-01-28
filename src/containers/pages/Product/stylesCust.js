import {PixelRatio, Platform, StyleSheet} from 'react-native';
import {color, styles} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  iconLocation: {flexDirection: 'row', marginTop: 5},
  image: {
    resizeMode: 'cover',
    height: 250,
  },
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
});

export default stylesCust;
