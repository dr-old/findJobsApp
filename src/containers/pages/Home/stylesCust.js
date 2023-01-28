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
  icon: color => ({
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: color,
  }),
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
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  cardFilter: {
    backgroundColor: color.white,
    flex: 1,
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 20,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default stylesCust;
