import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT, COLUMNS} from '../consts/Layout';

const Card = ({id, name, url, sales, count, increment}) => {
  return (
    <TouchableWithoutFeedback onPress={() => increment(id)}>
      <View style={styles.card}>
        {/* <Text>{name}</Text> */}
        <Image style={{height: '100%', width: '100%'}} source={{uri: url}} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3232ff',
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREEN_HEIGHT * 0.2,
    flex: 1,
    margin: 1,
    width: SCREEN_WIDTH / COLUMNS,
  },
});

export default Card;
