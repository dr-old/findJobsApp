import {PixelRatio, Platform, StyleSheet} from 'react-native';
import {color} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  groupInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  groupItem: {width: '47%'},
  contentBody: {marginHorizontal: 30, marginTop: 50},
  contentImage: {
    marginTop: 30,
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userLogin: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: color.white8,
    padding: 20,
    borderRadius: 12,
  },
  userImage: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
    borderRadius: 70,
  },
  userInfo: {flex: 1, marginLeft: 20},
});

export default stylesCust;
