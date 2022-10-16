import { SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";
import CustomButton from "../components/CustomButton";
import * as WebBrowser from "expo-web-browser";

const Success: React.FC = ({ navigation }: any) => {
  const handleButtonPressAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "http://172.20.10.2:5000/detect"
    );
    console.log(result);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../assets/images/success_img.png")}
        />
        <Text style={styles.title}>User verified!</Text>
        <CustomButton
          mode="outlined"
          style={styles.button}
          onPress={handleButtonPressAsync}
        >
          Start Exercise
        </CustomButton>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Success;

// Standardized template for card
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 260,
    width: 260,
    marginTop: 100,
    marginLeft: 50,
  },
  title: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
  },
  button: {
    width: 160,
    marginTop: 20,
    marginLeft: 100,
  },
});
