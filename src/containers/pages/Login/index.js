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
    login,
    navigation,
    setToogle,
    onChangeText,
    signIn,
    signOut,
  } = useAction();
  console.log('user:', login);

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
        {user?.user ? <Text>{user.user.name}</Text> : null}
        <ButtonLabel
          type="primary"
          solid={true}
          label="Login dengan Google!"
          size="large"
          // disabled={!signInValidate()}
          onClick={() => signIn()}
        />
      </View>
    </Container>
  );
};

export default Login;
