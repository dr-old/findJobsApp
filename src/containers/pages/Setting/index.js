import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {Container, SettingList} from '../../organism';
import packageJson from '../../../../package.json';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Setting() {
  const {login, signOut} = useAction();
  return (
    <Container>
      <View style={stylesCust.user}>
        <Image source={{uri: login.user.photo}} style={stylesCust.userImage} />
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
