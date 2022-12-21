import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


const List = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
      <Text style={styles.text1}>Books Categories Lists</Text>
      
      <Text style={styles.text2}>Action and Adventure</Text>
      <FlatList
        data={[
          {key: '1. Life of Pi - Yann Martel'},
          {key: '2. The Three Musketeers - Alexandre Dumas'},
          {key: '3. The Call of the Wild -Jack London'},
        ]}
        renderItem={({item}) => <Text style={styles.item1}>{item.key}</Text>}
      />
    
    <Text style={styles.text2}>Detective and Mystery</Text>
    <FlatList
        data={[
          {key: '1. The Night Fire - Michael Connelly'},
          {key: '2. The Adventures of Sherlock Holmes- Sir Arthur Conan Doyle'},
          {key: '3. And Then There Were None'},
        ]}
        renderItem={({item}) => <Text style={styles.item1}>{item.key}</Text>}
      />
      <Text style={styles.text2}>Fantasy</Text>
    <FlatList
        data={[
          {key: '1. One World The Water Dancer'},
          {key: '2. Circe - Madeline Miller'},
          {key: '3. Flatiron Books Ninth House - Leigh Bardugo'},
        ]}
        renderItem={({item}) => <Text style={styles.item1}>{item.key}</Text>}
      />
      <Text style={styles.text2}>Horror</Text>
    <FlatList
        data={[
          {key: '1. Anchor Carrie - Stephen King'},
          {key: '2. The Haunting of Hill House - Shirley Jackson'},
          {key: '3. Bird Box - Josh Malerman'},
        ]}
        renderItem={({item}) => <Text style={styles.item1}>{item.key}</Text>}
      />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   
   backgroundColor: 'rgb(196,174,173)',
  },
  text1:{
    fontSize:35,
    textAlign: 'center',
    margin: 20,
    color: '#990d29',
    fontFamily: 'serif'
  },
  item1: {
    padding: 2,
    fontSize: 15,
    height: 40,
    fontFamily: 'serif'
  },
  text2:{
    fontSize:20,
    textAlign: 'left',
    margin: 5,
    color: '#c71639',
    fontFamily: 'serif'
  },
});


export default List;