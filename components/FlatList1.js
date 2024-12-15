import { View, Text, FlatList} from 'react-native'
import React from 'react'
import UserData from './UserData';

export default function FlatList1() {
    const users = [
        { id: 1, name: "Chetan", email: "chetan@example.com" },
        { id: 2, name: "Raj", email: "raj@example.com" },
        { id: 3, name: "Aditi", email: "aditi@example.com" },
        { id: 4, name: "Vikas", email: "vikas@example.com" },
        { id: 5, name: "Neha", email: "neha@example.com" },
        { id: 6, name: "Arjun", email: "arjun@example.com" },
        // { id: 7, name: "Priya", email: "priya@example.com" }
    ];
    
  return (
    <View>
      <Text>Component in loop with FlatList</Text>
      <FlatList
      data={users}
      // keyExtractor={(item)=>item.id}
        renderItem={({item})=> <UserData item={item}/>
        }
      />
    </View>
  )
}

// problem h isme kchh
