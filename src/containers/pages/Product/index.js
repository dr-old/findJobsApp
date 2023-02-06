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
import {CardJob} from '../../../components/molecules';
import {useEffect} from 'react';

function Product({route}) {
  const {itemData} = route.params;
  const {navigation, isQty, setQty, isFav, setFav, handleGetDetail} =
    useAction();

  useEffect(() => {
    handleGetDetail(itemData.id);
  });

  return (
    <Container
      bgColor={color.white8}
      navbar={{
        type: 'fixed',
        title: 'Details Job',
        onClick: () => navigation.goBack(),
      }}>
      <Divider height={10} />
      <CardJob item={itemData} type={true} />
      <View style={stylesCust.cardDesc}>
        <Text style={styles.h6()}>Title</Text>
        <Divider height={10} />
        <Text style={styles.h5()}>{itemData.title}</Text>
        <Text style={styles.p4(color.tgrey)}>{itemData.type}</Text>
        <Divider height={20} />
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
