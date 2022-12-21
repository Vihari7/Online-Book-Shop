import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  

  return (
    <View style={styles.container}>
      <View style={styles.text}>
      <Text style={styles.text1}>Password Updated</Text>
      <View style={styles.image}>
      <Image source={{
          width: 150,
          height: 220,
          marginBottom: 50,
          padding: 50,
          alignItems: 'center',
          uri:"https://thumbs.dreamstime.com/b/big-tick-3346203.jpg",
         }}
         />
           
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>LogIn</Text>
      </TouchableOpacity>
    </View> 
    </View>   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: 'black',
  },
  image:{
    justifyContent: 'center',
    alignItems:'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#73ef71",
    padding: 10,
    margin: 5,
    borderRadius: 20,
    height:45,
    width:150,
  },
  text1:{
    fontSize:60,
    textAlign: 'center',
    margin: 40,
    color: '#20941f',
    fontFamily: 'serif'
  },
  
  
});

export default App;