import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Card} from '../components';
import {COLUMNS} from '../consts/Layout';
import {increment} from '../../App';

const CardGrid = ({data}) => {
  console.log('DATA' + Object.keys(data));
  const renderCard = ({item}) => (
    <Card
      id={item.id}
      name={item.name}
      url={item.url}
      sales={item.sales}
      count={item.count}
      increment={data.increment}></Card>
  );

  const formatData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    let totalLastRow = dataList.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({id: 'blank', empty: true});
      totalLastRow++;
    }
    return dataList;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={formatData(data.gameData)}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
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
