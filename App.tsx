import React from 'react';
import RouteNavigation from './src/navigation/RouteNavigation';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <RouteNavigation />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
