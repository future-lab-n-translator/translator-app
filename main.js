import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LanguageSelectorContainer from './app/containers/LanguageSelectorContainer';
import CaptionsContainer from './app/containers/CaptionsContainer';
import StatusAreaContainer from './app/containers/StatusAreaContainer';

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LanguageSelectorContainer/>
        <StatusAreaContainer/>
        <CaptionsContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

Exponent.registerRootComponent(Main);
