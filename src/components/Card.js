import React, {useState} from 'react';
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
import {Badge} from 'react-native-elements';

const Card = ({id, name, url, sales, count, increment}) => {
  const [colour, setColour] = useState(null);

  colour
    ? null
    : setColour(
        Object.values(COLOURS.tileOverlays)[
          generateRandomInt(Object.keys(COLOURS.tileOverlays).length)
        ],
      );

  return (
    <TouchableWithoutFeedback onPress={() => increment(id)}>
      <View style={styles.card}>
        <View
          style={[
            styles.overlay,
            {
              backgroundColor: colour,
            },
          ]}>
          <Badge
            value={count}
            status="success"
            // size="large"
            badgeStyle={{
              height: 30,
              width: 30,
            }}
            textStyle={{
              fontSize: 16,
              fontWeight: '700',
            }}
            containerStyle={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{name}</Text>
          </View>
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
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  nameText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Card;
