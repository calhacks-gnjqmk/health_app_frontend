import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import CustomButton from "../components/CustomButton";
import { ScreenProps } from "../screenTypes";

// Standardized template for card
const styles = StyleSheet.create({
  button: {
    width: 160,
  },
  card: {
    width: "80%",
    marginTop: 20,
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  title: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: "bold",
  },
});

const Navigation: React.FC<ScreenProps<"Navigation">> = ({
  navigation,
}: ScreenProps<"Navigation">) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Navigation Page</Text>
        <CustomButton
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </CustomButton>
        <CustomButton
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </CustomButton>
        <CustomButton
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate("Dashboard")}
        >
          Dashboard
        </CustomButton>
      </ScrollView>
    </SafeAreaView>
  );
}


export default Navigation;
