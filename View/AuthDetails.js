import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Controller/firebase";
import { Text, View, Button, StyleSheet } from "react-native";

export default function AuthDetails({navigation}) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Loged In",user)
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    console.log("Inside sign out");
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigation.navigate('signup')
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.mainView}>
      {authUser ? (
        <>
          <Text style={{color:"white", padding:20, fontSize: 20}} >{`Signed In As \n\n${authUser.email}`}</Text>
          <Button style={{marginBottom:20}} onPress={userSignOut} title="SignOut" />
        </>
      ) : (
        <Text style={{color:"white", padding:10, fontSize: 26}}>Signed Out</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  mainView:{
    height:'100%',
    backgroundColor: 'black',
    padding: 30,
  },
});

