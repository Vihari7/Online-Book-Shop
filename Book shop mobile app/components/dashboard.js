import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View,TextInput ,Button, DrawerLayoutAndroid} from "react-native";

const Dashboard = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  
  return (
    
    <View style={styles.container}>
      <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        
        <Button
          title="Change"
          onPress={() => changeDrawerPosition()}
        />
        <Button
          title="Open"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
    <View style={styles.text}>
      <Text style={styles.text1}>Free Reader</Text>
      <Text style={styles.text2}>Dashboard</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Action and Adventure</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button1}
        onPress={onPress}
      >
        <Text>Detective and Mystery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={onPress}
      >
        <Text>Fantasy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button3}
        onPress={onPress}
      >
        <Text>Horror</Text>
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
    fontSize:50,
    textAlign: 'center',
    margin: 30,
    color: '#990d29',
    fontFamily: 'serif'
  },
  text2:{
    fontSize:30,
    textAlign: 'left',
    margin: 10,
    color: '#c71639',
    fontFamily: 'serif'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#d93757",
    padding: 40,
    margin: 2,
    width: 350,
    height: 100,
    borderRadius: 20,
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#d26177",
    padding: 40,
    margin: 2,
    width: 350,
    height: 100,
    borderRadius: 20,
    color:'#ffffff'
  },
  
  button2: {
    alignItems: "center",
    backgroundColor: "#ba2158",
    padding: 40,
    margin: 2,
    width: 350,
    height: 100,
    borderRadius: 20,
  },
  button3: {
    alignItems: "center",
    backgroundColor: "#ee578e",
    padding: 40,
    margin: 2,
    width: 350,
    height: 100,
    borderRadius: 20,
  },
 
  
});

export default Dashboard;