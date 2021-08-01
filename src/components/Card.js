import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT, COLUMNS} from '../consts/Layout';
import generateRandomInt from '../utils/generateRandomInt';
import COLOURS from '../consts/Colours';

const Card = ({id, name, url, sales, count, increment}) => {
  console.log(id + '' + count);

  // console.log(
  //   'GEND' + generateRandomInt(Object.keys(COLOURS.tileOverlays).length),
  // );
  return (
    <TouchableWithoutFeedback onPress={() => increment(id)}>
      <View style={styles.card}>
        <View
          style={[
            styles.overlay,
            {
              backgroundColor:
                COLOURS.tileOverlays[
                  generateRandomInt(Object.keys(COLOURS.tileOverlays).length)
                ],
            },
          ]}>
          <Text>{name}</Text>
          <Text>{sales}</Text>
        </View>
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
  overlay: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Card;
