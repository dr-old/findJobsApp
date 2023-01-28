import {PixelRatio, Platform, StyleSheet} from 'react-native';
import {color, styles} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  cardBody: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  cardImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  icon: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: color.tgrey,
  },
  iconLocation: {flexDirection: 'row', marginTop: 5},
  card: {
    marginBottom: 10,
    marginHorizontal: 30,
    height: 135,
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: color.white,
  },
  image: {resizeMode: 'cover', width: 50, height: 50},
  title: [styles.h7(color.tblack), {textTransform: 'capitalize'}],
});

export default stylesCust;
