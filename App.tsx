/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

// SafeAreaView es un wrapper de screen que mantiene el contenido sin pisar el noch
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appTheme';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModel/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/BoxObjectModel/DimensionesScreen';
// import { PositionScreen } from './src/screens/BoxObjectModel/PositionScreen';
// import { FlexScreen } from './src/screens/BoxObjectModel/FlexScreen';
// import { TareaScreen } from './src/screens/BoxObjectModel/TareaScreen';

const App = () => {
  return (
    <SafeAreaView
      style={styles.fondo}
    >
      <StatusBar
        backgroundColor={'black'}
        barStyle="light-content"
      />
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen /> */}
      {/* <TareaScreen /> */}
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
