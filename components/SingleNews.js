import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import { NewsContext } from "../API/Context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, index }) => {
  const { darkTheme } = useContext(NewsContext);

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{
          marginTop: 90,
          height: "25%",
          resizeMode: "cover",
          width: windowWidth,
          
        }}
      />
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? "#282C35" : "white",
        }}
      >
        <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
          {item.title}
        </Text>
        <Text
          style={{ ...styles.content, color: darkTheme ? "white" : "black" }}
        >
          {item.description}
        </Text>
        <Text style={{ color: darkTheme ? "white" : "black" }}>
          News by :
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            {item.author ?? "unknown"}
          </Text>
        </Text>
        <ImageBackground
          blurRadius={30}
          style={styles.footer}
          source={{ uri: item.urlToImage }}
        >
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Text style={{ fontSize: 15, color: "white" }}>
              '{item?.content?.slice(0, 45)}...'
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
    marginRight: 30,
  },
  content: {
    fontSize: 18,
    paddingBottom: 10,
    marginRight: 35,
  },
  footer: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  description: {
    // height:"150%",
    padding: 25,
    flex: 1,
  },
});
