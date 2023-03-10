import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  Linking,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {styles, color} from '../../utils/styles';
import Divider from '../atoms/Divider';

function CardJob({item, type}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.push('Product', {itemData: item})}
      style={stylesCust.card}>
      <View style={stylesCust.cardImage}>
        <Image
          // source={{uri: item.company_logo}}
          source={require('../../assets/icon/No-Image.png')}
          style={stylesCust.image}
        />
      </View>
      <View style={stylesCust.cardBody}>
        <Text
          style={[
            type ? styles.h5(color.tblack) : styles.h7(color.tblack),
            {textTransform: 'capitalize'},
          ]}
          numberOfLines={2}>
          {type ? item?.company : item?.title}
        </Text>
        {type ? null : (
          <>
            <Text style={styles.p4(color.tgrey)}>{item?.type}</Text>
            <Text style={styles.p5(color.bluep)} numberOfLines={2}>
              {item?.company}
            </Text>
          </>
        )}
        <View style={stylesCust.iconLocation}>
          <FontAwesome5 name="map-marker-alt" size={15} color={color.tgrey} />
          <Divider width={5} />
          <Text style={styles.p4(color.tgrey)} numberOfLines={1}>
            {item?.location}
          </Text>
        </View>
        {type ? (
          <Text
            onPress={() => Linking.openURL(item?.company_url)}
            style={[styles.p4(color.bluep), {marginTop: 5}]}>
            Go To Website
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const stylesCust = StyleSheet.create({
  cardBody: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  cardImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  icon: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: color.tgrey,
  },
  iconLocation: {flexDirection: 'row', marginTop: 5},
  card: {
    marginBottom: 10,
    marginHorizontal: 30,
    height: 135,
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: color.white,
  },
  image: {resizeMode: 'cover', width: 50, height: 50},
});

export default CardJob;
