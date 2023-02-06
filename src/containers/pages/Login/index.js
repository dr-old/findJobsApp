import React from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  TouchableOpacity,
  Button,
} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {FormInput} from '../../../components/molecules';
import {ButtonLabel, Divider} from '../../../components/atoms';
import stylesCust from './stylesCust';
import useAction from './useAction';
import {Container} from '../../organism';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

const Login = () => {
  const {
    isToogle,
    form,
    user,
    navigation,
    isLoggedIn,
    setLoggedIn,
    setToogle,
    onChangeText,
    signIn,
    signOut,
    proccessLogin,
  } = useAction();

  console.log(user.user);

  return (
    <Container
      navbar={{
        type: 'nofixed',
        title: 'Welcome Back',
        subtitle: 'Log in to continue your journey',
      }}>
      <View style={stylesCust.contentImage}>
        <Image
          source={require('../../../assets/illustration/Login.png')}
          style={{resizeMode: 'contain'}}
        />
      </View>
      <View style={stylesCust.contentBody}>
        {user?.user?.name ? (
          <View style={stylesCust.userLogin}>
            <Image
              source={{uri: user.user.photo}}
              style={stylesCust.userImage}
            />
            <View style={stylesCust.userInfo}>
              <Text style={styles.h3()}>{user.user.name}</Text>
              <Text style={styles.p5(color.tgrey)}>{user.user.email}</Text>
            </View>
          </View>
        ) : null}
        <ButtonLabel
          type={isLoggedIn ? 'success' : 'primary'}
          solid={true}
          label={isLoggedIn ? 'Lanjut Masuk' : 'Login dengan Google!'}
          size="large"
          // disabled={!signInValidate()}
          onClick={() => proccessLogin()}
        />
      </View>
    </Container>
  );
};

export default Login;
