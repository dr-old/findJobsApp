import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert, Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const useAction = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const category = [
    {
      name: `Pakaian\nWanita`,
      image: require('../../../assets/icon/Dress.png'),
      onClick: () => console.log(),
    },
    {
      name: `Pakaian\nPria`,
      image: require('../../../assets/icon/T-shirt.png'),
      onClick: () => console.log(),
    },
    {
      name: 'Skincare',
      image: require('../../../assets/icon/Skincare.png'),
      onClick: () => console.log(),
    },
    {
      name: 'Sepatu',
      image: require('../../../assets/icon/Shoes.png'),
      onClick: () => console.log(),
    },
    {
      name: 'Elektronik',
      image: require('../../../assets/icon/Phone-Desktop.png'),
      onClick: () => console.log(),
    },
    {
      name: 'Lainnya',
      image: require('../../../assets/icon/More.png'),
      onClick: () => navigation.push('MapsSearch'),
    },
  ];

  const banner = [
    {
      image: require('../../../assets/illustration/Banner.png'),
    },
    {
      image: require('../../../assets/illustration/Banner-1.png'),
    },
    {
      image: require('../../../assets/illustration/Banner-2.png'),
    },
    {
      image: require('../../../assets/illustration/Banner-3.png'),
    },
  ];

  const product = [
    {
      storeId: '1',
      name: 'IPhone 14 Pro Max RAM 16GB Free Softcase',
      place: 'Jakarta Pusat',
      price: 24000000,
      image: require('../../../assets/illustration/Iphone-14.png'),
    },
    {
      storeId: '2',
      name: 'Sneakers High School',
      place: 'Jakarta Selatan',
      price: 500000,
      image: require('../../../assets/illustration/Shoes.png'),
    },
    {
      storeId: '3',
      name: 'Premium shallot from bogor / 70gr for every package',
      place: 'Kab. Bandung',
      price: 10000,
      image: require('../../../assets/illustration/Shallot.png'),
    },
  ];

  useEffect(() => {
    getCurrentPosition();
    handleLocationPermission();
  });

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        dispatch({
          type: 'SET_FORM_LOCATION',
          inputType: 'location',
          inputValue: position,
        });
      },
      error => {
        Alert.alert('GetCurrentPosition Error', JSON.stringify(error));
        dispatch({
          type: 'SET_FORM_LOCATION',
          inputType: 'location',
          inputValue: {},
        });
      },
      {
        enableHighAccuracy: true,
        // timeout: 20000,
        // maximumAge: 1000,
      },
    );
  };

  const handleLocationPermission = async () => {
    // 👈
    let permissionCheck = '';
    if (Platform.OS === 'ios') {
      permissionCheck = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      if (
        permissionCheck === RESULTS.BLOCKED ||
        permissionCheck === RESULTS.DENIED
      ) {
        const permissionRequest = await request(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        );
        permissionRequest === RESULTS.GRANTED
          ? console.log('Location permission granted.')
          : console.log('location permission denied.');
      }
    }

    if (Platform.OS === 'android') {
      permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (
        permissionCheck === RESULTS.BLOCKED ||
        permissionCheck === RESULTS.DENIED
      ) {
        const permissionRequest = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        permissionRequest === RESULTS.GRANTED
          ? console.log('Location permission granted.')
          : console.log('location permission denied.');
      }
    }
  };

  const onScrollEnd = e => {};

  return {
    category,
    navigation,
    onScrollEnd,
    banner,
    product,
  };
};

export default useAction;
