import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View,TextInput } from "react-native";

const LogApp = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (        
    <View style={styles.container}>
      <View style={styles.text}>
      <Text style={styles.text1}>WELCOME</Text>
      <Text style={styles.text2}>Free Reader</Text>
      <Text style={styles.text21}>Book shop</Text>
      <Text style={styles.text3}>Login Now</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="User Name/ Email address"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Text style={styles.pw}>forget password?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>LogIn</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.text4}>Don't have an account</Text>
    <Text style={styles.text41}>Signup</Text>

    <Text style={styles.text5}>OR</Text>
    <TouchableOpacity
        style={styles.button2}
        onPress={onPress}
      >
        <Text>Continue With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button3}
        onPress={onPress}
      >
        <Text>Continue With Facebook</Text>
      </TouchableOpacity>
    </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: '#b0c4de',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor:'#808080',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5683d5",
    padding: 10,
    margin: 5,
    borderRadius: 50,
  },
  text1:{
    fontSize:50,
    textAlign: 'center',
    margin: 10,
    color:'#191970',
    fontFamily: 'serif'
  },
  text2:{
    fontSize:35,
    textAlign: 'center',
    margin: 0,
    color:'#191970',
    fontFamily: 'serif'
  },
  text21:{
    fontSize:25,
    textAlign: 'center',
    margin: 0,
    color:'#191970',
    fontFamily: 'serif'
  },
  text3:{
    fontSize:20,
    textAlign: 'left',
    margin: 5,
    color:'#191970',
    fontFamily: 'serif'
  },
  text4:{
    fontSize:10,
    textAlign: 'center',
    margin: 0,
    color:'#191970',
    fontFamily: 'serif'
  },
  pw:{
    fontSize:10,
    textAlign: 'left',
    margin: 0,
    color: '#1e90ff',
    fontFamily: 'serif'
  },
  text41:{
    fontSize:10,
    textAlign: 'center',
    margin: 0,
    color: '#1e90ff',
    fontFamily: 'serif'
  },
  text5:{
    fontSize:10,
    textAlign: 'center',
    margin: 5,
    color:'#191970',
    fontFamily: 'serif'
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#82a4e1",
    padding: 10,
    margin: 5,
    borderRadius: 70,
  },
  button3: {
    alignItems: "center",
    backgroundColor: "#82a4e1",
    padding: 10,
    margin: 5,
    borderRadius: 70,
  },
  
});

export default LogApp;