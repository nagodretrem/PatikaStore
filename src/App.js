import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,FlatList } from 'react-native';
import Card from './components/Card';
import product_data from './product_data.json'
import Search from './components/Search';

export default function App() {
  const renderProduct = ({item}) => <Card product={item}/>;
  const keyProduct = item => item.id.toString();
  
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>PATIKASTORE</Text>
    <Search/>
    <FlatList 
    horizontal={false}
    numColumns={2}
    keyExtractor={keyProduct}
    data={product_data}
    renderItem={renderProduct}
    

    />
    <StatusBar style="dark" />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  title:{
    paddingLeft:10,
    fontWeight:'bold',
    fontSize:30,
    color:'#63006e',
  }
});
