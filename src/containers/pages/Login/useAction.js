import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

const useAction = () => {
  const dispatch = useDispatch();
  // const regis = useSelector(state => state.registerReducer);
  const form = useSelector(state => state.generalReducer.formLogin);
  const navigation = useNavigation();
  const [isToogle, setToogle] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    GoogleSignin.configure({
      // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      // webClientId:
      // '920534733394-m38uodis0ddd3a0epf7alecracrngpc4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      androidClientId:
        '920534733394-cplg12asg33dv1g1h98p8jsqeh9e52uc.apps.googleusercontent.com',
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
    isSignedIn();
  });

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_LOGIN', inputType: type, inputValue: value});
  };

  const signIn = async () => {
    console.log(form);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('user: ', userInfo);
      setUser(userInfo);
    } catch (error) {
      console.log('due: ', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play service not available');
      } else {
        console.log('Some other error happened', error);
      }
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('Please login');
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('edit: ', user);
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('User has not signed:');
      } else {
        console.log('Something went wrong in curr', error);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const signInValidate = () => {
    if (form.email && form.password) {
      return true;
    } else {
      return false;
    }
  };

  return {
    isToogle,
    form,
    user,
    navigation,
    setToogle,
    onChangeText,
    signIn,
    signOut,
  };
};

export default useAction;
