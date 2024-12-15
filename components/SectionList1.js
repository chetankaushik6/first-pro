import { View, Text, SectionList } from 'react-native'
import React from 'react'

export default function SectionList1() {
    const users = [
        {
          id: 1,
          name: "Chetan",
          data: ["anyor", "mca", "software Engineer"]
        },
        {
          id: 2,
          name: "Priya",
          data: ["developer", "BCA", "web developer"]
        },
        {
          id: 3,
          name: "Amit",
          data: ["designer", "BTech", "UI/UX designer"]
        },
        {
          id: 4,
          name: "Ravi",
          data: ["manager", "MBA", "product manager"]
        },
        {
          id: 5,
          name: "Neha",
          data: ["developer", "MSC", "data scientist"]
        },
        {
          id: 6,
          name: "Sita",
          data: ["analyst", "BSc", "business analyst"]
        },
        {
          id: 7,
          name: "Vikram",
          data: ["developer", "MTech", "backend developer"]
        }
      ];
      
  return (
    <View>
      <Text>SectionList1</Text>
      <SectionList
       sections={users}
       renderItem={({item})=><Text>{item}</Text>}
       renderSectionHeader={({ section: { name } }) => <Text style={{fontSize:20,fontWeight:'bold',paddingTop:8,}}>{name}</Text>}

       />
    </View>
  )
}