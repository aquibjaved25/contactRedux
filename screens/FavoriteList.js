import React, { useState , useEffect} from 'react';
import {View, Text, StyleSheet,AsyncStorage,FlatList, TouchableOpacity} from 'react-native';


import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import ContactItem from '../components/ContactItem';

const FavoriteList = props =>{

    var initialVal = [];
    const [contacts, setContacts] = useState([]);

    const getkey = item => item.mobile;

    async function fetchData(){
        
        AsyncStorage.getAllKeys((err,keys) =>{
            AsyncStorage.multiGet(keys,(error,stores) => {
            stores.map((result, i , store) => {
                    initialVal.push(JSON.parse(store[i][1]));
                    return true;
            });
            initialVal = initialVal.filter(function(obj){
                    return obj.favorite == true
            });

            initialVal.sort((a,b) => (a.name > b.name) ? 1 : -1 )
            console.log(initialVal);
            setContacts(initialVal)
            });
        });
    };

    useEffect(() => {
        
        const willFocusSub = props.navigation.addListener('willFocus',fetchData);
        return() =>{ willFocusSub.remove();};
        
       }, [fetchData]);


    if(contacts.length >0){
return(
    <View style = {styles.screen}>
    <View style = {styles.lisContainer}>
    <FlatList
    data = {contacts}
    keyExtractor = {getkey}
    renderItem={({ item }) =>
              <ContactItem
              uri={item.uri}
              name={item.name}
              mobile={item.mobile}
              landline = {item.landline}

              />}/>
            </View> 

        </View>
);
    }else{

        return(
            <View style = {styles.screen} >
                <Text>No Favorites added currently</Text>
            </View>
        );
    }
};


FavoriteList.navigationOptions = navData => {

    return{
        headerTitle:'Favorite Contact List',
        headerLeft:() =>  <HeaderButtons HeaderButtonComponent  =  {HeaderButton}>
            <Item title = "Menu" iconName='ios-menu' onPress={()=>{
                navData.navigation.toggleDrawer();
            } }
            
            />
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%'
    },
    lisContainer: {
        padding: 5,
        width:'95%' ,
        justifyContent:'flex-start',
        
      }
});

export default FavoriteList;