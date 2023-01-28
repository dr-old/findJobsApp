import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  RefreshControl,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import {ButtonIcon, Divider} from '../../../components/atoms';
import ErrorMessage from '../../../components/molecules/ErrorMessage';
import stylesCust from './stylesCust';
import helpers from '../../../utils/helpers';

function Product() {
  const navigation = useNavigation();

  const product = [
    {
      title: 'IPhone 14 Pro Max RAM 16GB Free Softcase',
      place: 'Jakarta Pusat',
      price: 24000000,
      image: require('../../../assets/illustration/Iphone-14.png'),
    },
    {
      title: 'Sneakers High School',
      place: 'Jakarta Selatan',
      price: 500000,
      image: require('../../../assets/illustration/Shoes.png'),
    },
    {
      title: 'Premium shallot from bogor / 70gr for every package',
      place: 'Kab. Bandung',
      price: 10000,
      image: require('../../../assets/illustration/Shallot.png'),
    },
  ];

  function CardCart({data}) {
    return (
      <View style={stylesCust.card}>
        <View style={stylesCust.checkIcon}>
          <ButtonIcon
            type={stylesCust.icon}
            name="circle"
            size={13}
            alignSelf="center"
            alignItems="flex-start"
            onClick={() => console.log('warning')}
          />
        </View>
        <View style={stylesCust.cardImage}>
          <Image source={data.image} style={stylesCust.image} />
        </View>
        <View style={stylesCust.cardBody}>
          <View style={{height: 35}}>
            <Text style={styles.p4(color.tgrey)} numberOfLines={2}>
              {data.title}
            </Text>
          </View>
          <Text style={styles.h4(color.tblack)} numberOfLines={1}>
            {helpers.formatCurrency(data.price, 'Rp. ')}
          </Text>
          <View style={stylesCust.cardIcon}>
            <ButtonIcon
              type={stylesCust.icon}
              name="minus"
              size={13}
              alignSelf="flex-end"
              onClick={() => console.log('warning')}
            />
            <Text style={styles.h5(color.tblack, 'center')}>10</Text>
            <ButtonIcon
              type={stylesCust.icon}
              name="plus"
              size={13}
              alignSelf="flex-end"
              onClick={() => console.log('warning')}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <Container
      bgColor={color.white8}
      navbar={{
        type: 'fixed',
        title: 'Keranjang',
        // onClick: () => navigation.goBack(),
      }}>
      {product.length > 0 ? (
        <View style={stylesCust.feature}>
          <View style={stylesCust.cardCart}>
            <ButtonIcon
              type={stylesCust.icon}
              name="circle"
              size={13}
              alignSelf="center"
              alignItems="center"
              onClick={() => console.log('warning')}
            />
            <Text style={styles.h5(color.tblack)}>Happy DOF Store</Text>
          </View>
          {product.map((item, index) => {
            return !item.title ? null : <CardCart key={index} data={item} />;
          })}
        </View>
      ) : (
        <ErrorMessage marginVertical={50} message="Data is not found" />
      )}
    </Container>
  );
}

export default Product;
