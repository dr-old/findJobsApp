import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import helpers from '../../../utils/helpers';

const useAction = () => {
  const login = useSelector(state => state.authReducer);
  const navigation = useNavigation();
  const [isQty, setQty] = useState(1);
  const [isFav, setFav] = useState(false);

  const handleGetDetail = id => {
    let payload = {
      link: `recruitment/positions/${id}`,
    };

    console.log(payload);
    // dispatch(fetchJobsData(payload));
  };

  return {navigation, isQty, setQty, isFav, setFav, handleGetDetail};
};

export default useAction;
