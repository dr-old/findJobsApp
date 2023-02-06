import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

const useAction = () => {
  const dispatch = useDispatch();
  const form = useSelector(state => state.generalReducer.formLogin);
  const navigation = useNavigation();
  const [isToogle, setToogle] = useState(true);
  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setError] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '920534733394-m38uodis0ddd3a0epf7alecracrngpc4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
    // isSignedIn();
  });

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_LOGIN', inputType: type, inputValue: value});
  };

  const signIn = async () => {
    console.log(form);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // console.log('user: ', userInfo);
      setUser(userInfo);
      setError(null);
      setLoggedIn(true);
      // navigation.replace('Home');
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
      setLoggedIn(false);
      dispatch({type: 'SET_LOGIN_CLEAN'});
    }
  };

  const proccessLogin = () => {
    if (isLoggedIn) {
      // navigation.replace('Home');
      dispatch({
        type: 'SET_LOGIN',
        user: user.user,
        idToken: user.idToken,
      });
    } else {
      signIn();
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
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
      setLoggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('User has not signed:', error);
      } else {
        console.log('Something went wrong in curr:', error);
      }
      setLoggedIn(false);
      dispatch({type: 'SET_LOGIN_CLEAN'});
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

  return {
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
  };
};

export default useAction;
