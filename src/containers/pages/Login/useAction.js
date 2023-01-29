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
  const login = useSelector(state => state.generalReducer.login);
  const navigation = useNavigation();
  const [isToogle, setToogle] = useState(true);
  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(true);
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
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // console.log('user: ', userInfo);
      dispatch({
        type: 'SET_LOGIN',
        user: userInfo.user,
        idToken: userInfo.idToken,
      });
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
      setError(error.toString());
      dispatch({type: 'SET_LOGIN', user: {}});
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
      // console.log('edit: ', user);
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log('User has not signed:', error);
        setLoggedIn(false);
      } else {
        console.log('Something went wrong in curr:', error);
        setLoggedIn(false);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isToogle,
    form,
    user,
    login,
    navigation,
    setToogle,
    onChangeText,
    signIn,
    signOut,
  };
};

export default useAction;
