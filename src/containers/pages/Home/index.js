import * as React from 'react';
import {useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import {ButtonIcon, ButtonImage, Divider} from '../../../components/atoms';
import {CardJob, CardProduct} from '../../../components/molecules';
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
        onSearch: () => console.log(),
        onProfile: () => console.log(),
      }}
      // refScroll={scrollRef}
      // // onScroll={({nativeEvent}) => isCloseToBottom(nativeEvent)}
      // refreshControl={
      //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      // }
    >
      <View style={{backgroundColor: color.green, height: 70, flex: 1}}></View>
      <Divider height={10} />
      {jobs?.data?.data?.length > 0
        ? jobs.data.data.map((item, index) => {
            return item?.title ? <CardJob item={item} key={index} /> : null;
          })
        : null}
      <View style={stylesCust.pagination}>
        <Text
          onPress={() => getJobs(1)}
          style={isPage == 1 ? styles.h4(color.bluep) : styles.h5(color.tgrey)}>
          1
        </Text>
        <Divider width={10} />
        <Text
          onPress={() => getJobs(2)}
          style={isPage == 2 ? styles.h4(color.bluep) : styles.h5(color.tgrey)}>
          2
        </Text>
      </View>
    </Container>
  );
}

export default Home;
