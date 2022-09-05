import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import DemoData from './data';

const TestPage = () => {
    
    const DisplayData = ({item}) => ( 
          <View>
               <Text style = {styles.titleStyle}>{item.id}</Text>
               <Text style = {styles.bodyStyle}>{item.title}</Text>
          </View>
    );

    const listSeparator=()=>{
          return <View style = {styles.seperator}/>
    }

     return(
          <SafeAreaView>
               <FlatList
                    data = {DemoData}
                    renderItem = {DisplayData}  
                    ItemSeparatorComponent={ listSeparator }         
               />
          </SafeAreaView>
     );
}




const styles = StyleSheet.create({

     titleStyle:{
          color: '#ff7f50', 
          fontSize:18,
          marginLeft : 10,
     },
     bodyStyle:{
          color: '#000000', 
          fontSize:15,
          marginLeft:10,
     },
     seperator:{
          height: 1,
          width: '100%',
          marginTop: 10,
          marginBottom:10,
          backgroundColor: '#CCC',
     }
});
export default TestPage;
