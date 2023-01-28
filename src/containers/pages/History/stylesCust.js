import {StyleSheet} from 'react-native';
import {color} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: color.white,
    marginHorizontal: 30,
    borderRadius: 12,
  },
  cardBody: {flex: 1, marginLeft: 15},
  infoText: {textAlign: 'center'},
  badges: {
    backgroundColor: color.biruEmpat,
    borderRadius: 30,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgesText: {color: color.biru, fontSize: 11},
  feature: {
    backgroundColor: color.putih,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {resizeMode: 'contain'},
  cardImage: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white8,
  },
});

export default stylesCust;
