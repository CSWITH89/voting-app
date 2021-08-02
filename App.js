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
    let matchedID = gameData.find(game => game.id === id);
    matchedID.count = matchedID.count + 1;
    setGameData(
      [...gameData.filter(game => game.id !== id), matchedID].sort((a, b) => {
        return parseInt(a.id) - parseInt(b.id);
      }),
    );
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
