import * as React from 'react';
import {useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import {
  ButtonIcon,
  ButtonImage,
  ButtonLabel,
  Divider,
} from '../../../components/atoms';
import {CardJob, CardProduct, FormInput} from '../../../components/molecules';
import {fetchJobsData} from '../../../redux/actions/jobsAction';
import {color, styles} from '../../../utils/styles';
import {Container, ImageCarousel} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Home() {
  const {
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
  } = useAction();

  const onRefresh = useCallback(() => {
    pagination();
  }, [pagination]);

  return (
    <Container
      loading={jobs.loading}
      bgColor={color.white8}
      navbar={{
        type: 'fixed',
        value: isSearch,
        onChangeText: value => setSearch(value),
        onSearch: () => getJobs(),
        onProfile: () => setOpenFilter(!isOpenFilter),
      }}
      // refScroll={scrollRef}
      // // onScroll={({nativeEvent}) => isCloseToBottom(nativeEvent)}
      // refreshControl={
      //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      // }
    >
      {isOpenFilter ? (
        <View style={stylesCust.cardFilter}>
          <View style={stylesCust.filter}>
            <Text style={styles.h5(color.tblack, 'center')}>Full Time</Text>
            <ButtonIcon
              type={stylesCust.icon(isFulltime ? color.bluep5 : color.tgrey)}
              name={isFulltime ? 'toggle-on' : 'toggle-off'}
              size={20}
              alignItems="flex-end"
              onClick={() => setFulltime(!isFulltime)}
            />
          </View>
          <FormInput
            placeholder="Location"
            type="solid"
            value={isLocation}
            onChangeText={value => setLocation(value)}
          />
          <View style={{flex: 1, alignSelf: 'flex-end'}}>
            <ButtonLabel
              type={'primary'}
              solid={true}
              label={'Apply Filter!'}
              onClick={() => getJobs()}
            />
          </View>
        </View>
      ) : null}
      <Divider height={10} />
      {/* <Text style={styles.p5()}>{JSON.stringify(jobs.data.data)}</Text> */}
      {jobs?.data?.data?.length > 0
        ? jobs.data.data.map((item, index) => {
            return item?.title ? <CardJob item={item} key={index} /> : null;
          })
        : null}
      {isSearch || isFulltime || isLocation ? null : (
        <View style={stylesCust.pagination}>
          <Text
            onPress={() => getJobs(1)}
            style={
              isPage == 1 ? styles.h4(color.bluep) : styles.h5(color.tgrey)
            }>
            1
          </Text>
          <Divider width={10} />
          <Text
            onPress={() => getJobs(2)}
            style={
              isPage == 2 ? styles.h4(color.bluep) : styles.h5(color.tgrey)
            }>
            2
          </Text>
        </View>
      )}
    </Container>
  );
}

export default Home;
