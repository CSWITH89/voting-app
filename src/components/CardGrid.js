import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Card} from '../components';
import {COLUMNS} from '../consts/Layout';

const CardGrid = ({data}) => {
  const renderCard = ({item}) => <Card label={item.key}></Card>;

  const formatData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    let totalLastRow = dataList.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({key: 'blank', empty: true});
      totalLastRow++;
    }
    return dataList;
  };
  //   const renderCard = ({item}) => <Text>{item.key}</Text>;

  return (
    <View>
      <FlatList
        data={formatData(data, COLUMNS)}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
        numColumns={COLUMNS}
      />
    </View>
  );
};

export default CardGrid;
