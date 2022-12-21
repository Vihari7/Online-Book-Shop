import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View,TextInput,Image} from "react-native";

const exitApp = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  
  return (
    <View style={styles.container}>
    <View style={styles.text}>
      <Text style={styles.text1}>Free Reader</Text>
      <View style={styles.image}>
       <Image source={{
          width: 370,
          height: 300,
          marginBottom: 50,
          padding: 50,
          alignItems: 'center',
          uri:"https://thumbs.dreamstime.com/b/blur-book-shelf-bookshop-interior-background-education-knowledge-125494667.jpg",
         }}
         />
         </View>
      <Text style={styles.text2}>Do you want to Quit</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Exit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={onPress}
      >
        <Text>Continue </Text>
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
    backgroundColor: 'rgb(196,174,173)',
  },
  text1:{
    fontSize:60,
    textAlign: 'center',
    margin: 10,
    color:'#faf0e6',
    fontFamily: 'serif'
  },
  text2:{
    fontSize:20,
    textAlign: 'center',
    margin: 30,
    color:'#faf0e6',
    fontFamily: 'serif'
  },
  
  image:{
    justifyContent: 'center',
    alignItems:'center',
    
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5683d5",
    padding: 10,
    margin: 2,
    borderRadius: 70,
  },
  
  button2: {
    alignItems: "center",
    backgroundColor: "#5683d5",
    padding: 10,
    margin: 2,
    borderRadius: 70,
  },
 
  
});

export default exitApp;