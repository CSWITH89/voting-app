import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SCREEN_WIDTH, COLUMNS} from '../consts/Layout';

const Card = ({label}) => {
  return (
    <View style={styles.card}>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3232ff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    flex: 1,
    margin: 1,
    width: SCREEN_WIDTH / COLUMNS,
  },
});

export default Card;
