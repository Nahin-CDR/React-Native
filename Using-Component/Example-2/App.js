import React,{ useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import axios from 'axios';
import DisplayData from './display';

const TestPage = () => {
    

    const [ApiData,setApiData] = useState([]);
    useEffect(() => {
     
          axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
               //console.log(res.data);
               setApiData(res.data);
          });
    },[]);




    const listSeparator=()=>{
          return <View style = {styles.seperator}/>
    }
     return(
          <SafeAreaView>
               <FlatList
                    data = {ApiData}
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
