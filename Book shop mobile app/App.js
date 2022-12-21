import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View,Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
      <View style={styles.container}>
        <View style={styles.text}>
       <View style={styles.image}>
       <Image source={{
          width: 370,
          height: 300,
          marginBottom: 50,
          padding: 50,
          alignItems: 'center',
          uri:"https://img.freepik.com/free-photo/book-stack-library-room-blurred-bookshelf-background_42691-514.jpg?w=360",
         }}
         />
         </View>
         <Text style={styles.welcome}>WELCOME</Text>
         <Text style={styles.comname}>FreeReader</Text>
         <Text style={styles.text1}>Book Shop</Text>
         <Text style={styles.text2}>The best place to buy</Text>
         <Text style={styles.text2}> the best books for the money on hand</Text>
      </View>
      
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Get Start</Text>
      </TouchableOpacity>
      
      <Text style={styles.text3}>If you already have an account?</Text>
      <Text style={styles.link1}>login</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(196,174,173)',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  welcome:{
    fontSize:50,
    textAlign: 'center',
    margin: 10,
    color:'#faf0e6',
    fontFamily: 'serif'
  },
  comname:{
    fontSize:30,
    textAlign: 'center',
    margin: 0,
    color: '#faf0e6',
    fontFamily: 'serif'
  },
  text1:{
    fontSize:20,
    textAlign: 'center',
    margin: 0,
    color: '#faf0e6',
    fontFamily: 'serif'
  },
  text2:{
    fontSize:10,
    textAlign: 'center',
    margin: 2,
    color: '#faf0e6',
    fontFamily: 'serif'
  },
  text3:{
    fontSize:12,
    textAlign: 'center',
    margin: 0,
    color: '#faf0e6',
    fontFamily: 'serif'
  },
  link1:{
    fontSize:12,
    textAlign: 'center',
    margin: 0,
    color: '#1e90ff',
    fontFamily: 'serif'
  },
  
  image:{
    justifyContent: 'center',
    alignItems:'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5683d5",
    padding: 10,
    margin: 10,
    width: 150,
    height: 45,
    borderRadius: 20,

  },

});

export default App;