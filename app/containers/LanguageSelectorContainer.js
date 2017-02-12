import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Picker
} from 'react-native';
const Item = Picker.Item;

export default class LanguageSelectorContainer extends React.Component {
  state = {
    selected1: 'key1',
    selected2: 'key1',
    selected3: 'key1',
    color: 'red',
    mode: Picker.MODE_DIALOG,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Translate To:</Text>
        <View style={styles.content}>
        <Picker
            style={styles.picker}
            selectedValue={this.state.selected2}
            mode="dropdown">
            <Item label="English" value="key0" />
            <Item label="French" value="key1" />
         </Picker>
         <View style={styles.divider} >
           <Text> TO</Text>
         </View>
         <Picker
            style={styles.picker}
            selectedValue={this.state.selected2}
            mode="dropdown">
            <Item label="English" value="en" />
            <Item label="French" value="fr" />
         </Picker>
         </View>
        
      </View>
    );
  }
}
onValueChange = (key, value) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
 };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20, 
        borderRadius:10
  },
   picker: {
    width: 100,
    height: 50
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    width: 50,
    height: 50,
    top: 75,
    padding: 10
  }

});
