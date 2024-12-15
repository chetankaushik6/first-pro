import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Map1() {
    const users1 = [
        { id: 1, name: "Chetan", age: 25, course: "Computer Science" },
        { id: 2, name: "Raj", age: 30, course: "Mathematics" },
        { id: 3, name: "Priya", age: 22, course: "Business Administration" },
        { id: 4, name: "Ananya", age: 28, course: "Psychology" },
        { id: 5, name: "Amit", age: 26, course: "Mechanical Engineering" }
    ];
    
  return (
    <View>
      <Text>Map1</Text>y
      {
        users1.map((user,index)=>{
            return(
                <View key="index">
                     <Text style={styles.text}>
                        Name: {user.name}, Age: {user.age}, Course: {user.course}
                        </Text>
                </View>
            )
        })
      }
    </View>
  )
}

const styles =StyleSheet.create({
    text:{
        color:'white',
        fontSize:30, 
        padding:10,
        backgroundColor:'black',
        margin:10,
        borderWidth:1,
        fontFamily: 'Segoe UI Semilight',
        
    }
})