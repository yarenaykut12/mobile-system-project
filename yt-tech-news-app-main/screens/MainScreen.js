import React from "react";

import { Text, StyleSheet, View, Button, Image } from "react-native";
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.Main}>
      
      <Text style={styles.text}>    NEWS WEB    APPLICATION</Text>
      <View style={styles.buttonContainer}>

      <Button
  onPress={() => navigation.navigate("Home")}
  title=" Home"
  color="white"
  fontSize ="200"
  
  style={{backgroundColor: 'white', borderRadius: 20, height: 100, width: 200 }}
/>
</View>
<View style={styles.buttonContainer1}>
<Button
onPress={() => navigation.navigate("Search")}
          title="Search"
          fontSize = "900"
          buttonStyle={{ backgroundColor: "#00FF00", fontSize: 100 }}
          color="white"
          style={styles.button} />
     </View>

    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 60,
    backgroundColor: "black",
    alignItems: "center",
    marginTop: 200,
  },
  Main: {
    backgroundColor: "black",
    flex: 1,
      },
  buttonContainer: {
    alignItems: "center",
    marginTop: 100,
    fontSize : 200,
    width: "70%",
        alignSelf: "center",
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "red",
        marginTop: 50

  },
  buttonContainer1: {
    alignItems: "center",
    marginTop: 100,
    fontSize : 200,
    width: "70%",
        alignSelf: "center",
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "red",
        marginTop: 50

  },
  button: {
    fontSize: 200,
  },

});

export default MainScreen;