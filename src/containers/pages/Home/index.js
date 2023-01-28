import * as React from 'react';
import {useEffect} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {ButtonIcon, ButtonImage, Divider} from '../../../components/atoms';
import CardJob from '../../../components/atoms/CardJob';
import {CardProduct} from '../../../components/molecules';
import {fetchJobsData} from '../../../redux/actions/jobsAction';
import {color, styles} from '../../../utils/styles';
import {Container, ImageCarousel} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Home() {
  const {jobs, navigation} = useAction();

  return (
    <Container
      loading={jobs.loading}
      bgColor={color.white8}
      navbar={{
        type: 'fixed',
        onSearch: () => console.log(),
        onProfile: () => console.log(),
      }}>
      {/* <View style={stylesCust.card}>
        <Text style={styles.h5(color.bluep1)}>Rekomendasi</Text>
        <Divider height={10} />
      </View> */}
      <Divider height={10} />
      {jobs?.data?.data?.length > 0
        ? jobs.data.data.map((item, index) => {
            return <CardJob item={item} key={index} />;
          })
        : null}
    </Container>
  );
}

export default Home;
