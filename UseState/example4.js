import { View, Text, StyleSheet,Button,ScrollView} from 'react-native';
import React,{ useState, useEffect} from 'react';
import axios from 'axios';



const TestPage = () => {

     const [myData,setData] = useState([]);

     useEffect(() => {
          
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then(function (response) {
              console.log(response.data);
              setData(response.data);
          })
          
         
          
     },[]);

     return (
          <ScrollView>
               <View>
                    <Text style={{fontSize:40}}>Welcome!</Text>
                    {myData.slice(0,myData.length).map(item =>{
                         return ( 
                                   <Text style={{color:'#000000',fontSize:35}}>{item.name}</Text>    
                                );
                         
                 })}
               </View>
         </ScrollView>
     );
}

export default TestPage;
