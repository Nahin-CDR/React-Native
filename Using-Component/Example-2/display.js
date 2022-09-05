import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';


const DisplayData = ({item}) => { 
     return (
          <View>
               <Text style = {styles.titleStyle}>{item.id}</Text>
               <Text style = {styles.bodyStyle}>{item.title}</Text>
          </View>
     );
}

const styles = StyleSheet.create({

     titleStyle:{
          color: '#ff7f50', 
          fontSize:30,
          fontWeight: 'bold',
          marginLeft : 10,
     },
     bodyStyle:{
          color: '#000000', 
          fontSize:15,
          marginLeft:10,
     }
});
export default DisplayData;
