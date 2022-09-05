import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import DemoData from './data';
import DisplayData from './display';

const TestPage = () => {
    

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
     seperator:{
          height: 1,
          width: '100%',
          marginTop: 10,
          marginBottom:10,
          backgroundColor: '#CCC',
     }
});
export default TestPage;
