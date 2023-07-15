import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { auth } from "../Controller/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const signUp = (e) => {

    if(password===cPassword){
        console.log(email, password, cPassword);
    
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Account Created')
            setEmail('')
            setPassword('')
            setCPassword('')
        })
        .catch((error) => {
            console.log(error.code);
        });
    }
    else{
        console.log('Password and Confirm Password are different')
    }
  };

  return (
        <View style={styles.mainView}>
            <Text style={styles.headingText}>Create Account</Text>
            <View style={{borderBottomWidth: 2, borderColor: 'white', marginBottom:20}} />

            
                <Text style={styles.secondText}>Email</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter your Email"
                    placeholderTextColor='gray'
                    value={email}
                    onChangeText={(e)=>setEmail(e)}
                    inputMode="email"
                />
                <Text style={styles.secondText}>Password</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter your Password"
                    placeholderTextColor='gray'
                    secureTextEntry = {true}
                    value={password}
                    onChangeText ={(e)=> setPassword(e)}
                />
                <Text style={styles.secondText}>Confirm Password</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter your Password again"
                    placeholderTextColor='gray'
                    secureTextEntry = {true}
                    value={cPassword}
                    onChangeText={(e)=> setCPassword(e)}
                />
                <Button title="Sign up" onPress={signUp}/>
                
            <TouchableOpacity onPress={()=> navigation.navigate('signin')}>
                <Text style={styles.thirdText}>Already have an account ? Login</Text>
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
  