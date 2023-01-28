import * as React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import {WebView} from 'react-native-webview';
import {ButtonIcon, ButtonLabel, Divider} from '../../../components/atoms';
import helpers from '../../../utils/helpers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';
import CardJob from '../../../components/atoms/CardJob';

function Product({route}) {
  const {itemData} = route.params;
  const {navigation, isQty, setQty, isFav, setFav} = useAction();
  return (
    <Container
      bgColor={color.white8}
      navbar={{
        type: 'fixed',
        title: 'Details Job',
        onClick: () => navigation.goBack(),
      }}>
      <Divider height={10} />
      <CardJob item={itemData} />
      <View style={stylesCust.cardDesc}>
        <Text style={styles.h6()}>Deskripsi</Text>
        <Divider height={10} />
        <Text style={styles.p5(color.tgrey)}>{itemData.description}</Text>
      </View>
      <View style={{marginHorizontal: 30, marginVertical: 30}}>
        <ButtonLabel
          type="primary"
          solid={true}
          label="Go to Website!"
          size="large"
          onClick={() => Linking.openURL(itemData.company_url)}
        />
      </View>
    </Container>
  );
}

export default Product;
