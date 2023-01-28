import {StyleSheet} from 'react-native';
import {color} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: color.white,
    flex: 1,
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
    backgroundColor: color.white,
    marginTop: 10,
  },
  image: {resizeMode: 'contain'},
  cardImage: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white8,
  },
  cardIcon: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: color.bluep,
  },
  checkIcon: {
    width: 50,
    flexDirection: 'row',
  },
  cardCart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 3,
  },
});

export default stylesCust;
