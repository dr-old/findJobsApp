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
import HTMLView from 'react-native-htmlview';
import {useState} from 'react';

function Product({route}) {
  const {itemData} = route.params;
  const {navigation, detail, handleGetDetail} = useAction();
  const [isDetail, setDetail] = useState(true);

  useEffect(() => {
    if (isDetail) {
      handleGetDetail(itemData.id);
    }
    return () => {
      setDetail(false);
    };
  });

  // console.log(detail.data.data);

  return (
    <Container
      bgColor={color.white8}
      loading={detail.loading}
      navbar={{
        type: 'fixed',
        title: 'Details Job',
        onClick: () => navigation.goBack(),
      }}>
      <Divider height={10} />
      {detail?.data?.data?.title ? (
        <>
          <CardJob item={detail.data.data} type={true} />
          <View style={stylesCust.cardDesc}>
            <Text style={styles.h6()}>Title</Text>
            <Divider height={10} />
            <Text style={styles.h5()}>{detail.data.data.title}</Text>
            <Text style={styles.p4(color.tgrey)}>{detail.data.data.type}</Text>
            <Divider height={20} />
            <Text style={styles.h6()}>Deskripsi</Text>
            <Divider height={10} />
            <HTMLView
              value={detail.data.data.description}
              stylesheet={stylesCust}
            />
            <HTMLView
              value={detail.data.data.how_to_apply}
              stylesheet={stylesCust}
            />
          </View>
          <View style={stylesCust.button}>
            <ButtonLabel
              type="primary"
              solid={true}
              label="Go to Website!"
              size="large"
              onClick={() => Linking.openURL(detail.data.data.company_url)}
            />
          </View>
        </>
      ) : null}
    </Container>
  );
}

export default Product;
