import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState, useCallback} from 'react';
import {Alert, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchJobsData} from '../../../redux/actions/jobsAction';

const useAction = () => {
  const jobs = useSelector(state => state.jobsReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isPage, setPage] = useState(1);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const scrollRef = useRef();

  useEffect(() => {
    if (isInitialRender) {
      getJobs(isPage);
    }
    return () => {
      setIsInitialRender(false);
    };
  });

  const pagination = () => {
    setRefreshing(true);
    let cnt = isPage + 1;
    setPage(cnt);
    getJobs(cnt);
    setRefreshing(false);
  };

  const getJobs = page => {
    setPage(page);
    const payload = {
      link: `recruitment/positions.json?page=${page}`,
      // data: {params: {page: 1}},
    };
    dispatch(fetchJobsData(payload));
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return {
    jobs,
    navigation,
    scrollRef,
    refreshing,
    isPage,
    getJobs,
    isCloseToBottom,
    pagination,
  };
};

export default useAction;
