import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';

const ContactItem = props => {

    return (
        <View style={styles.mainContainer} >

            <TouchableOpacity onPress= {props.onSelect} >

            <View style = {styles.row}>
            
            <View>
            <Image style={styles.avatarContainer}
            source={props.uri.length
                ? {uri: props.uri}                      // Use object with 'uri'
                : require('../assets/imgplaceholder.png')}/>
            
            </View>
            
             <View style ={styles.textColumn} >
            <Text style={styles.textStyle}> {props.name}</Text>
            <Text style={styles.textStyle}> {props.mobile}</Text>
            </View>
            </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    mainContainer: {
        borderRadius:10,
        backgroundColor: 'white',
        flex:1,
        marginTop:10,
        marginBottom:10,
        marginStart:10,
        marginEnd:10,
        elevation:5,
        paddingTop:10,
        paddingBottom:10,
        justifyContent:'space-between',
        alignItems:'flex-start',    
        
    },

    row:{
        flexDirection:'row',
        width:'98%',
        justifyContent:'center',
        paddingHorizontal:10
    },
    avatarContainer: {
        height: 60,
        width: 60,
        borderRadius: 32,
        
        
      },

    textStyle: {
        marginStart:20,
        fontSize: 20,
        color: 'black'
        
    },
    textColumn:{
        width:'80%',
        flexDirection:'column'
    }
});

export default ContactItem;