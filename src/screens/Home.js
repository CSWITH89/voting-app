import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {CardGrid} from '../components';
import DummyData from '../consts/DummyData';

// const dummyData = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}];

const Home = () => {
  return (
    <View style={styles.container}>
      <CardGrid data={DummyData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default Home;
