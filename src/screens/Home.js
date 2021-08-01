import React from 'react';
import {View, Text} from 'react-native';
import {CardGrid} from '../components';

const dummyData = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}];

const Home = () => {
  return (
    <View>
      <CardGrid data={dummyData} />
    </View>
  );
};

export default Home;
