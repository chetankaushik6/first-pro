import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

export default UserData= (props)=>{
    const item = props.item;
   
    return(
        <View style={styles.box}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.email}</Text>
    </View>
    )
}


const styles = StyleSheet.create({

    box:{
        borderWidth:1,
        margin:10,
        padding:5,
        backgroundColor:'darkblue',
        // color:'yellow',
        display:'flex',
        flexDirection:'row',
         justifyContent:'space-between'
    },

    text:{
        color:'white',
        fontSize:20,
        borderWidth:2,
        margin:5,
        backgroundColor:'black',
    }
});