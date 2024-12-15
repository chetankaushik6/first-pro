import React from 'react';
import { Text, View, Button, onPress } from 'react-native';
import Office from './components/Office';
import { useState } from 'react';
import Form1 from './components/Form1';
import List1 from './components/List1';
import Map1 from './components/Map1';
import Grid1 from './components/Grid1';
import FlatList1 from './components/FlatList1';
import SectionList1 from './components/SectionList1';

const App = () => {
    const [name , setName] = useState("chetan");

    const updateName = (value) =>{
        setName(value);
    }
  return (
    <View>
      
     {/* <Button title="update name" onPress={() => updateName("kaushik")}></Button> */}
      {/* <Office/> */}
      {/* <Text style={{ fontSize: 30 ,backgroundColor:'grey',color:'white',textAlign:'center'}}>{name}</Text> */}
      {/* <User name={name}/> */}


          {/* <Form1/> */}
          {/* <List1/> */}
          {/* <Map1/> */}
          {/* <Grid1/> */}
          {/* <FlatList1/> */}
           <SectionList1/>

    </View>
  );
};

const User = (props) => {
return (
  <View>
   <Text style={{ fontSize: 30 ,backgroundColor:'black',color:'yellow',textAlign:'center'}}>{props.name}</Text>
  </View>
);
};



export default App;