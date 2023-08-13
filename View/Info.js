import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Styles from '../Styles';

export default Info = () => {
  return (
    <View style={Styles.mainView}>
      <Text style={Styles.headingText}>Coding Comrades</Text>
      <Text style={Styles.secondText}>Cross Platform - Assignment_2</Text>
      <View style={Styles.line} />
      <Text style={Styles.secondText}>Team Members</Text>
      <ScrollView >
        <Text style={Styles.thirdText}>Ronit Sanghvi: 200543133</Text>
        <Text style={Styles.thirdText}>Masum Salvi: 200543133</Text>
        <Text style={Styles.thirdText}>Saunik Dabhi: 200543133</Text>
        <Text style={Styles.thirdText}>Himanshu Makhija: 200543133</Text>
        <Text style={Styles.thirdText}>Karan Shah: 200543133</Text>
      </ScrollView>
    </View>
  );
};