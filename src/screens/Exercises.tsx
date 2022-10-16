import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native-paper";

const Exercises: React.FC = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.container}>
            <Text style={styles.bigTitle}>Exercises</Text>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              accessibilityRole="button"
              style={styles.exerciseButton}
                            onPress={() => navigation.navigate("Camera")}
            >
              <View style={{ display: "flex" }}>
                <ImageBackground
                  source={{
                    uri: "https://cdn.muscleandstrength.com/sites/default/files/barbell_vs_dumbbell_shoulder_press_-_1200x630.jpg",
                  }}
                  style={{
                    height: 200,
                    width: "100%",
                  }}
                  imageStyle={{ borderRadius: 10 }}
                />
                <View
                  style={{
                    flex: 1,
                    position: "absolute",
                    backgroundColor: "#ffffff",
                    opacity: 0.8,
                    height: 200,
                    width: "100%",
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Text style={styles.exerciseLabel}>SHOULDER PRESS</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityRole="button"
              style={styles.exerciseButton}
            >
              <View style={{ display: "flex" }}>
                <ImageBackground
                  source={{
                    uri: "https://blog.nasm.org/hubfs/power-pushups.jpg",
                  }}
                  style={{
                    height: 200,
                    width: "100%",
                  }}
                  imageStyle={{ borderRadius: 10 }}
                />
                <View
                  style={{
                    flex: 1,
                    position: "absolute",
                    backgroundColor: "#ffffff",
                    opacity: 0.8,
                    height: 200,
                    width: "100%",
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Text style={styles.exerciseLabel}>PUSH UPS</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityRole="button"
              style={styles.exerciseButton}
            >
              <View style={{ display: "flex" }}>
                <ImageBackground
                  source={{
                    uri: "https://hips.hearstapps.com/hmg-prod/images/2021-runnersworld-weekendworkouts-ep41-situps-jc-v03-index-1633617537.jpg?crop=0.476xw:0.427xh;0.270xw,0.526xh&resize=1200:*",
                  }}
                  style={{
                    height: 200,
                    width: "100%",
                  }}
                  imageStyle={{ borderRadius: 10 }}
                />
                <View
                  style={{
                    flex: 1,
                    position: "absolute",
                    backgroundColor: "#ffffff",
                    opacity: 0.8,
                    height: 200,
                    width: "100%",
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Text style={styles.exerciseLabel}>SIT UPS</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 18,
  },
  bigTitle: {
    color: "#500080",
    fontWeight: "bold",
    fontSize: 40,
  },
  exerciseButton: {
    borderWidth: 1,
    borderRadius: 10,
    width: 320,
    borderColor: "#500080",
    marginTop: 20,
  },
  exerciseLabel: {
    fontSize: 30,
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
  },
    container: {
        flex: 1
    }
});

export default Exercises;
