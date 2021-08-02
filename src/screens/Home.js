import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {CardGrid} from '../components';
import {DataContext} from '../../App';

const Home = () => {
  const data = useContext(DataContext);
  return (
    <View style={styles.container}>
      <CardGrid data={data} />
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
