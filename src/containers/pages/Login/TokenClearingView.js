import React, {useState, useCallback} from 'react';
import {Button, TextInput, StyleSheet, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export function TokenClearingView() {
  const [tokenToClear, setToken] = useState('');
  const clearToken = useCallback(async () => {
    try {
      await GoogleSignin.clearCachedAccessToken(tokenToClear);
      console.warn('success!');
    } catch (err) {
      console.error(err);
    }
  }, [tokenToClear]);
  return (
    <View>
      <TextInput
        onChangeText={setToken}
        value={tokenToClear}
        style={styles.input}
        placeholderTextColor={'grey'}
        placeholder={'put token to clear here'}
      />
      <Button title="clear token" onPress={clearToken} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {height: 50, width: 200},
});
