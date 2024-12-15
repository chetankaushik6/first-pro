import { View, Text, StyleSheet, TextInput,Button } from 'react-native'
import React, { useState } from 'react'
import Exstyles from './OfficeStyle'
export default function Office() {
    const [name,setName]=useState("kaushik");
  return (
    <View>
      {/* <Text style={styles.text}>This is React Native</Text>
      <Text style={styles.text}>hello react</Text>
       */}
      <TextInput 
      placeholder='enter your name' 
      style={styles.textInput} 
      value={name}
      onChangeText={(text)=>setName(text)} 
      />
      
      <Button title='clear ' onPress={()=>setName('')}/>
      <Text style={Exstyles.text}>{name}</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    textInput:{
         fontSize:18,
         borderWidth:2,
         margin:10,
        }
})