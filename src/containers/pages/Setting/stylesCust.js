import {StyleSheet} from 'react-native';

const stylesCust = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 20,
    marginTop: 20,
  },
  user: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  userImage: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
    borderRadius: 70,
    marginBottom: 20,
  },
});

export default stylesCust;
