import * as React from 'react';
import {
  Text, 
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  navigation,
  SafeAreaView } from 'react-native';

import CarouselCard from '../components/FlashCard/CarouselCard';
export const S_WIDTH = Dimensions.get('window').width - 20;
export const WIDTH = Math.round(WIDTH * 0.7);


export default function App({ route, navigation }) {

  const {pageName,category} = route.params;
 
    return (
    <SafeAreaView style={styles.container}>
        
        <View style={styles.appBarBackground}>
           <Text style={styles.appBarTitle}>
            {pageName}
           </Text>
         </View>

         <View style={styles.line}/>
        <CarouselCard api_category={category}/>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30
    },
    appBarTitle:{
      fontWeight : 'bold',
      fontSize :25,
      color : '#000000',
      marginLeft:15,
      alignItems:'center',
      justifyContent: 'center'
      
    },
    appBarBackground:{
      backgroundColor :'white',
      height :40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    line:{
      backgroundColor :'#808080',
      height : 1,
      width : S_WIDTH,
    }
});
