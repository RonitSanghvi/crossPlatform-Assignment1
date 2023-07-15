import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { auth } from "../Controller/firebase";

export default function SignIn({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        console.log('Sign In Success')
        navigation.navigate('status')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
        <View style={styles.mainView}>
            <Text style={styles.headingText}>Login</Text>
            <View style={{borderBottomWidth: 2, borderColor: 'white', marginBottom:20}} />
            <Text style={styles.secondText}>Email</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="Enter your Email"
                placeholderTextColor='gray'
                value={email}
                onChangeText={(e)=> setEmail(e)}
            />
            <Text style={styles.secondText}>Password</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="Enter your Password"
                placeholderTextColor='gray'
                value={password}
                onChangeText={(e)=> setPassword(e)}
            />
            
            <Button title="Login" onPress={signIn} />

            <TouchableOpacity onPress={()=> navigation.navigate('signup')}>
                <Text style={styles.thirdText}>New User ? SignUp</Text>
            </TouchableOpacity>


        </View>
  );
};

const styles = StyleSheet.create({

    mainView:{
        height:'100%',
        backgroundColor: 'black',
        padding: 30,

    },
    headingText: {
      color:'white',
      fontSize: 34,
      fontWeight: 'bold',
      paddingBottom: 20
    },
    secondText:{
      color:'white',
      fontSize: 24,
      paddingBottom: 10
    },
    thirdText:{
        marginTop: 30,
        color:'white',
        fontSize: 18
    },
    textInput:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        color:'white',
        marginBottom: 20
    }
  });
  