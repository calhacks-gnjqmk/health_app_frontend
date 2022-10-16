import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { Button, Card, Text } from "react-native-paper";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Dashboard: React.FC = ({ navigation }: any) => {
  const [Point, setPoint] = useState(120);
  const [Streak, setStreak] = useState(5);
  const [TotalStreak, setTotalStreak] = useState(10);
  const [Succeed, setSucceed] = useState("gold");
  const friend = require("../assets/images/refer_a_friend.png");
  const image = { uri: 'https://cdn-icons-png.flaticon.com/512/1213/1213709.png' }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.bigTitle}>Rewards</Text>
        </View>
        {/*<Card style={[styles.card, { backgroundColor: "#ace4f5" }]}>
          <CustomButton
            mode="outlined"
            color="#dfc4fb"
            style={styles.alarmButton}
            onPress={() => navigation.navigate("Alarms")}
          >
            <Text style={styles.setAlarmNow}>SET ALARM NOW</Text>
          </CustomButton>
        </Card>*/}
        <Card style={styles.card}>
          <Text style={styles.label}>Total Streak: {TotalStreak} 🔥 </Text>
          <View style={styles.container2}>
            <Text
              style={[
                styles.circle,
                { backgroundColor: Streak >= 1 ? Succeed : "silver" },
              ]}
            >
              Mon
            </Text>
            <Text
              style={[
                styles.circle,
                { backgroundColor: Streak >= 2 ? Succeed : "silver" },
              ]}
            >
              Tue
            </Text>
            <Text
              style={[
                styles.circle,
                { backgroundColor: Streak >= 3 ? Succeed : "silver" },
              ]}
            >
              Wed
            </Text>
            <Text
              style={[
                styles.circle,
                { backgroundColor: Streak >= 4 ? Succeed : "silver" },
              ]}
            >
              {" "}
              Thur{" "}
            </Text>
            <Text
              style={[
                styles.circle,
                { backgroundColor: Streak >= 5 ? Succeed : "silver" },
              ]}
            >
              Fri
            </Text>
            <Text
              style={[
                styles.circle,
                { backgroundColor: Streak >= 6 ? Succeed : "silver" },
              ]}
            >
              Sat
            </Text>
            <Text
              style={[
                styles.circle,
                { backgroundColor: Streak >= 7 ? Succeed : "silver" },
              ]}
            >
              Sun{" "}
            </Text>
          </View>
        </Card>
        {/* Card for the streaks */}
        <Card style={styles.card}>
          <Text style={styles.label}>Coins Collected: {Point}🪙 </Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.text}>Claim Crypotcurrency </Text>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.giftImage}
          ></ImageBackground>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.text}>Share With Friends 😄 </Text>
          <Button
            mode="contained"
            style={styles.referButton}
            onPress={() => undefined}
            color="#fff"
          >
                        Refer a Friend
          </Button>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  container: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 18,
  },
  container2: {
    paddingVertical: 12,
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  box: {
    width: 50,
    height: 50,
  },
  card: {
    width: "100%",
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
    textAlign: "center",
    backgroundColor: "#dddddd",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 40,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "100%",
    textAlign: "center",
  },
  referButton: {
    color: "white",
  },
  alarmButton: {
    height: 80,
    borderRadius: 40,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    paddingTop: 20,
    minWidth: "100%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 10000,
    textAlign: "center",
    alignSelf: "flex-start",
    paddingVertical: 8,
  },
  bigTitle: {
    color: "#500080",
    fontWeight: "bold",
    fontSize: 40,
    alignText: "left",
  },
  friendsImage: {
    height: 120,
    width: 260,
    marginTop: 10,
    marginLeft: 0,
  },
  giftImage: {
    height: 200,
    width: 200,
        marginLeft: 30,
  },
  alarmCard: {
    fontSize: 20,
  },
  setAlarmNow: {
    fontSize: 20,
  },
});

export default Dashboard;
