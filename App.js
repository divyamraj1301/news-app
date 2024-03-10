import React, { useContext } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import NewsTabs from "./components/NewsTabs";
import Context, { NewsContext } from "./API/Context";

function App() {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282C35" : "white",
      }}
    >
      <NewsTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
