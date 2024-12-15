import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

export default function Form1() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");
    const [display, setDisplay] = useState(false);

    // const [text, setText] = useState('');

    const resetFormData = () => {
        setDisplay(false);
        setName("");
        setEmail("");
        setPasscode("");
       
        
    };
    return (
        <View>
            <Text style={styles.head}>Simple form in React Native</Text>

            <TextInput
                placeholder='enter your name'
                style={styles.textInput}
                onChangeText={(text) => setName(text)}
                value={name}
            />

            <TextInput
                placeholder='enter your email'
                style={styles.textInput}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <TextInput
                placeholder='enter your password'
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={(text) => setPasscode(text)}
                value={passcode}
            />
            {/* 
<Button buttonStyle={styles.btnPrint} title="Print Detail"/>
<Button buttonStyle={styles.btnClear} title="Clear Detail"/> */}
            <View style={{ margin: 10, marginTop: 5, backgroundColor: '#32CD32' }}>
                <Button color={"green"} style={styles.btnPrint} title="Print Detail"
                    onPress={() => setDisplay(true)} />
            </View>
            <View style={{ margin: 10, marginTop: 1 }}>
                <Button style={styles.btnClear} title="Clear Detail" onPress={resetFormData} />
            </View>

            <View>
                {
                    display ?
                        <View>
                            <Text>Name:{name}</Text>
                            <Text>Email:{email}</Text>
                            <Text>Password:{passcode}</Text>
                        </View> : null
                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        fontSize: 30,
        backgroundColor: 'black',
        color: 'white',
        opacity: 0.6,
    },
    textInput: {
        fontSize: 20,
        borderWidth: 2,
        margin: 10,
        padding: 10,
    },
    // btnPrint:{

    //     margin:10,
    //     padding:10,
    //     color:'green',
    // },
    // btnPrint: {
    //     backgroundColor: 'green', // blue color
    //     padding: 10,
    //     borderRadius: 5,
    //     width: 200,
    //     height: 50,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    //   btnClear: {
    //     backgroundColor: '#dc3545', // red color
    //     padding: 10,
    //     borderRadius: 5,
    //     width: 200,
    //     height: 50,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
})