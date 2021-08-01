import React, {createContext, useState} from 'react';
import MainNav from './src/navigation/MainNav';
import {NavigationContainer} from '@react-navigation/native';
import DummyData from './src/consts/DummyData';

const DataContext = createContext();

const App = () => {
  const [gameData, setGameData] = useState(
    DummyData.map(game => {
      return {...game, count: 0};
    }),
  );

  return (
    <DataContext.Provider value={{gameData, setGameData}}>
      <NavigationContainer>
        <MainNav></MainNav>
      </NavigationContainer>
    </DataContext.Provider>
  );
};

export default App;
