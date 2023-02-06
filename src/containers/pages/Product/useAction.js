import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchJobsDetailData} from '../../../redux/actions/jobsAction';
import helpers from '../../../utils/helpers';

const useAction = () => {
  const dispatch = useDispatch();
  const detail = useSelector(state => state.jobsDetailReducer);
  const navigation = useNavigation();
  const [isQty, setQty] = useState(1);
  const [isFav, setFav] = useState(false);

  const handleGetDetail = id => {
    let payload = {
      link: `recruitment/positions/${id}`,
    };
    dispatch(fetchJobsDetailData(payload));
  };

  return {navigation, detail, handleGetDetail};
};

export default useAction;
