import {View,Text,StyleSheet,Button,ScrollView} from 'react-native';
import React,{useState} from 'react';
import axios from 'axios';

const TestPage = () => {

     const [name,setName] = useState("Karim");
     const [myData,setData] = useState([]);
     const [category,setCategory] = useState("posts");
     
     useState(()=>{
          axios.get(`https://jsonplaceholder.typicode.com/${category}`)
          .then(function(response) {

               setData(response.data);
          })

     },[myData]);

     // [] eta use korar jonno etar vetore jara jara thakbe tarai just update hole useEffect er vetor er jinis 
     // gula execute hobe

     return (
          <ScrollView>
               <View>
                    <Text style={{fontSize:40,marginLeft:20}}>Welcome!</Text>
                    <Text style={{fontSize:30,color:'#000000',marginLeft:20}}>{name}</Text>
                    <Button title="change name" onPress={()=>setName("React Native")} />
                    {
                         myData.map((data)=>{
                              return (
                                   <Text style={{fontSize:30,color:'#000000'}}>{data.id}</Text>
                                   // data sob screen e print hobe
                              );
                         })
                    }
               </View>
         </ScrollView>
     );
}

export default TestPage;
