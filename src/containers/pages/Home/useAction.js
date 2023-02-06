import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState, useCallback} from 'react';
import {Alert, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchJobsData} from '../../../redux/actions/jobsAction';

const useAction = () => {
  const jobs = useSelector(state => state.jobsReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [isPage, setPage] = useState(1);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isOpenFilter, setOpenFilter] = useState(false);
  const [isFilter, setFilter] = useState(false);
  const [isFulltime, setFulltime] = useState(false);
  const [isLocation, setLocation] = useState('');
  const [isSearch, setSearch] = useState('');
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
    let payload = {};
    let search = isSearch.toLowerCase();
    let location = isLocation.toLowerCase();
    if (page) {
      setPage(page);
      payload = {
        link: `recruitment/positions.json?page=${page}`,
      };
    } else {
      payload = {
        link: `recruitment/positions.json?description=${search}&location=${location}&fulltime=${isFulltime.toString()}`,
      };
    }
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
    isOpenFilter,
    isFilter,
    isFulltime,
    isLocation,
    isSearch,
    setSearch,
    setLocation,
    setFulltime,
    setFilter,
    setOpenFilter,
    getJobs,
    isCloseToBottom,
    pagination,
  };
};

export default useAction;
