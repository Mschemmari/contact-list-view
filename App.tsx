import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';

function App() {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
