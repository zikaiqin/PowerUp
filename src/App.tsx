/**
 * @format
 */

import React, {useState} from 'react';

import {BottomNavigation} from 'react-native-paper';
import HomePage from '@pages/home/HomePage';
import TrackerPage from '@pages/tracker/TrackerPage';

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'home', title: 'Home', focusedIcon: 'home'},
    {key: 'tracker', title: 'Trackers', focusedIcon: 'chart-bar'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomePage,
    tracker: TrackerPage,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default App;
