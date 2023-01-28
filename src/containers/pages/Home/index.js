import * as React from 'react';
import {useEffect} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {ButtonIcon, ButtonImage, Divider} from '../../../components/atoms';
import {CardProduct} from '../../../components/molecules';
import {fetchJobsData} from '../../../redux/actions/jobsAction';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {color, styles} from '../../../utils/styles';
import {Container, ImageCarousel} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Home() {
  const {jobs} = useAction();
  console.log(jobs);

  return (
    <Container
      loading={jobs.loading}
      bgColor={color.white8}
      navbar={{
        type: 'fixed',
        onSearch: () => console.log(),
        onProfile: () => console.log(),
      }}>
      <View style={stylesCust.card}>
        <Text style={styles.h5(color.bluep1)}>Rekomendasi</Text>
        <Divider height={10} />
      </View>
      {jobs?.data?.data?.length > 0
        ? jobs.data.data.map((item, index) => {
            return (
              <View key={item.id} style={stylesCust.card}>
                <View style={stylesCust.cardImage}>
                  <Image
                    // source={{uri: item.company_logo}}
                    source={require('../../../assets/icon/No-Image.png')}
                    style={stylesCust.image}
                  />
                </View>
                <View style={stylesCust.cardBody}>
                  <Text
                    style={[
                      styles.h7(color.tblack),
                      {textTransform: 'capitalize'},
                    ]}
                    numberOfLines={2}>
                    {item.title}
                  </Text>
                  <Text style={styles.p4(color.tgrey)}>{item.type}</Text>
                  <Text style={styles.p5(color.bluep)} numberOfLines={2}>
                    {item.company}
                  </Text>
                  <View style={stylesCust.iconLocation}>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={15}
                      color={color.tgrey}
                    />
                    <Divider width={5} />
                    <Text style={styles.p4(color.tgrey)} numberOfLines={1}>
                      {item.location}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })
        : null}
    </Container>
  );
}

export default Home;
