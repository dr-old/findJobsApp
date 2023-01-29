import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {Container, SettingList} from '../../organism';
import packageJson from '../../../../package.json';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Setting() {
  const {login, signOut} = useAction();
  console.log(login);
  return (
    <Container>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Image
          source={{uri: login.user.photo}}
          style={{
            resizeMode: 'cover',
            width: 100,
            height: 100,
            borderRadius: 70,
            marginBottom: 20,
          }}
        />
        <Text style={styles.h3()}>{login.user.name}</Text>
        <Text style={styles.p5(color.tgrey)}>{login.user.email}</Text>
      </View>
      <View style={stylesCust.container}>
        <SettingList
          title="General"
          data={[
            {
              icon: 'code-branch',
              label: 'Version',
              subtitle: packageJson.version,
            },
            {
              icon: 'sign-out-alt',
              label: 'Logout',
              onClick: () => signOut(),
            },
          ]}
        />
      </View>
    </Container>
  );
}

export default Setting;
