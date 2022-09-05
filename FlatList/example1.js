import React,{ useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import axios from 'axios';


const TestPage = () => {

     const [myData,setData] = useState([]);
     
     useEffect(() => {
          
          axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(function (response) {
              setData(response.data);
          })
          
     },[]);




    const DisplayData = ({item}) => ( 
          <View>
               <Text style = {styles.titleStyle}>{item.title}</Text>
               <Text style = {styles.bodyStyle}>{item.body}</Text>
          </View>
    );

    const listSeparator=()=>{
          return <View style = {styles.seperator}/>
    }

     return(
          <SafeAreaView>
               <FlatList
                    data = {myData}
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
