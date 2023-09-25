import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import TitleBar from "./components/TitleBar";
import Calculator from './components/Calculator';
import Footer from "./components/Footer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        style={styles.container}
        source={require("./components/images/background_3.jpg")}
        imageStyle={{ opacity: 0.3 }}
      >
        <TitleBar />
        <Calculator />
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    alignItems: "center"
  }
});
