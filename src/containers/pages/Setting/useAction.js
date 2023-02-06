import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import {useDispatch, useSelector, useEffect} from 'react-redux';
import AuthContext from '../../../../AuthContext';

const useAction = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.generalReducer.login);
  const navigation = useNavigation();
  const {signOutContext} = useContext(AuthContext);

  GoogleSignin.configure({
    webClientId:
      '920534733394-m38uodis0ddd3a0epf7alecracrngpc4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      dispatch({type: 'SET_LOGIN_CLEAN'});
      signOutContext();
    } catch (error) {
      console.log(error);
    }
  };
  return {login, signOut};
};

export default useAction;
