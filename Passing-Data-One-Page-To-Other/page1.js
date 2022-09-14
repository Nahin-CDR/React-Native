import React,{ useState, useEffect} from "react";
import { 
  StyleSheet, 
  TextInput, 
  ScrollView,
  Text,
  SafeAreaView,
  StatusBar,
  View,
  navigate,
  Image,
  Alert,
  navigation,
  Dimensions,
  FlatList,
  TouchableOpacity,
  color } from "react-native";
import { Card, Title ,Apbar} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
import CategoryCard from '../components/FlashCard/CategoryCard';

const FlashCardCategory = ({ navigation }) => {

  const {navigate} = useNavigation();


  
  
  const DisplayCategoryCards = ({item}) => ( 
      
        <View>
          <TouchableOpacity onPress={() => Alert.alert(
                //this is title
                'Select Language',
                //this is body text
                'you are comfortable with',
                [
                  { 
                    text : 'English', color: 'black' , onPress: () => navigate('ShowFlashCards',
                      {
                        pageName :'Docker Page',
                        category : item.category,
                      }
                    )
                  },
                  { 
                    text : 'Bangla', 
                    color: 'black' , 
                    onPress: () => navigate('ShowFlashCards',
                    {
                      pageName :'Docker Page',
                      category : 'DockerBangla',
                    })
                  },
                  {
                    text : 'Cancel', 
                    color: 'black', 
                    onPress: () => console.log('exited')
                  },
                ],
              {cancelable:false}
            )}>
            <CategoryCard item={item}/>
          </TouchableOpacity>
        </View>
    );



};
