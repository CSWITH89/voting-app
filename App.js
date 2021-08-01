import React, {createContext, useState} from 'react';
import MainNav from './src/navigation/MainNav';
import {NavigationContainer} from '@react-navigation/native';
import DummyData from './src/consts/DummyData';

export const DataContext = createContext([]);

const App = () => {
  const [gameData, setGameData] = useState(
    DummyData.map(game => {
      return {...game, count: 0};
    }),
  );

  const increment = id => {
    const matchedID = gameData.filter(game => game.id === id);
    setGameData([...gameData, ...matchedID]);
  };

  return (
    <DataContext.Provider value={{gameData, increment}}>
      <NavigationContainer>
        <MainNav></MainNav>
      </NavigationContainer>
    </DataContext.Provider>
  );
};

export default App;
