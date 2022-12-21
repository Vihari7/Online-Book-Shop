import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View,TextInput } from "react-native";

const ReApp = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.text}>
      <Text style={styles.text1}>Reset Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="User Name"
        keyboardType="default"
      />
      <TextInput
        style={styles.input2}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="New Password"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input3}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Confirm Password"
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: '#ad6f69',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    borderColor:'#7f1734',
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor:'#7f1734',
  },
  input3: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor:'#7f1734',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5683d5",
    padding: 15,
    margin: 50,
    borderRadius: 20,
  },
  text1:{
    fontSize:60,
    textAlign: 'center',
    margin: 40,
    color: '#7f1734',
    fontFamily: 'serif'
  },
  
  
});

export default ReApp;