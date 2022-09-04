import {View,Text,StyleSheet,Button,ScrollView} from 'react-native';
import React,{useState} from 'react';

const TestPage = () => {

     const [name,setName] = useState("Karim");
     

     return (
          <ScrollView>
               <View>
                    <Text style={{fontSize:40,marginLeft:20}}>Welcome!</Text>
                    <Text style={{fontSize:30,color:'#000000',marginLeft:20}}>{name}</Text>
                    <Button title="change name" onPress={()=>setName("React Native")} />
               </View>
         </ScrollView>
     );
}

export default TestPage;
