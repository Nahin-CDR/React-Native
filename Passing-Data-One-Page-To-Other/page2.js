import * as React from 'react';
import {
  Text, 
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
  navigation,
  SafeAreaView } from 'react-native';



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


