import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Grid1() {
    const users1 = [
        { id: 1, name: "Chetan", age: 25, course: "Computer Science" },
        { id: 2, name: "Raj", age: 30, course: "Mathematics" },
        { id: 3, name: "Priya", age: 22, course: "Business Administration" },
        { id: 4, name: "Ananya", age: 28, course: "Psychology" },
        { id: 5, name: "Amit", age: 26, course: "Mechanical Engineering" },
        { id: 6, name: "Neha", age: 24, course: "Physics" },
        { id: 7, name: "Suresh", age: 29, course: "Electrical Engineering" },
        { id: 8, name: "Kiran", age: 27, course: "Architecture" },
        { id: 9, name: "Ravi", age: 32, course: "Chemistry" },
        { id: 10, name: "Maya", age: 23, course: "English Literature" },
        { id: 11, name: "Priya", age: 22, course: "Business Administration" },
        { id: 12, name: "Ananya", age: 28, course: "Psychology" },
        { id: 13, name: "Amit", age: 26, course: "Mechanical Engineering" },
        { id: 14, name: "Neha", age: 24, course: "Physics" },
        // { id: 15, name: "Shiv", age: 27, course: "Civil Engineering" },
        // { id: 16, name: "Tina", age: 25, course: "Sociology" },
        // { id: 17, name: "John", age: 31, course: "Economics" }
    ];
    
    
  return (
    <View>
      <Text style={styles.head}>Dynamic Grid in React Native</Text>
      <View style={styles.container}>
       {
           users1.map((user,index)=>{
               return(
                <Text style={styles.item} key="index">{user.name}</Text>
               )
           })
       }
         
       
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    head:{
        fontSize:25,
        backgroundColor:'black',
        color:'white',
        textAlign:'center',
        margin:10,
        padding:10,
    },
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
    },

    item:{
        fontSize:25,
        height:100,
        width:120,
        backgroundColor:'blue',
        color:'white',
        margin:5,
        padding:5,
        // flexWrap:'wrap',
    }
})