import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Card} from '../components';
import {COLUMNS} from '../consts/Layout';

const CardGrid = ({data}) => {
  const renderCard = ({item}) => (
    <Card
      id={item.id}
      name={item.name}
      url={item.url}
      count={item.count}
      increment={data.increment}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.gameData}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
        numColumns={COLUMNS}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CardGrid;
