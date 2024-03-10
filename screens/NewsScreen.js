import React, { useState, useContext } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { NewsContext } from "../API/Context";
import Carousel from "react-native-snap-carousel";
import SingleNews from "../components/SingleNews";

const NewsScreen = () => {
  const {
    news: { articles },
    darkTheme,
  } = useContext(NewsContext);
  const windowHeight = Dimensions.get("window").height;
  const [activeIndex, setActiveIndex] = useState();

  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          firstItem={articles.slice(0, 10).length - 1}
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} darkTheme={darkTheme} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});

export default NewsScreen;
