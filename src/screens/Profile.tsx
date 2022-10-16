import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, DataTable, Text, TextInput } from "react-native-paper";

const Profile: React.FC = ({ navigation }) => {
  const [healthInfoLoaded, setHealthInfoLoaded] = React.useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.avatarContainer}>
            <Avatar.Image
              size={180}
              source={{
                uri: "https://media-exp1.licdn.com/dms/image/C4D03AQFPjoSN1SeT-w/profile-displayphoto-shrink_800_800/0/1641088977909?e=2147483647&v=beta&t=z9RIZbhvK24X2jdAUEBZ18j0bnH50_w3XqWsgPTnSV4",
              }}
            />
            <Text style={styles.bigTitle}>Tjun Jet</Text>
          </View>
          <View style={[styles.container, styles.inputContainer]}>
            <Button mode="contained">Update Email</Button>
            {healthInfoLoaded ? (
              <View>
                <DataTable>
                  <DataTable.Row>
                    <DataTable.Title>Height</DataTable.Title>
                    <DataTable.Cell>5'9"</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Title>Weight</DataTable.Title>
                    <DataTable.Cell>220 lbs</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Title>Date of Birth</DataTable.Title>
                    <DataTable.Cell>5/9/1978</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Title>Sex</DataTable.Title>
                    <DataTable.Cell>M</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Title>Medical History</DataTable.Title>
                    <DataTable.Cell> Type 2 Diabetes </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Title>{""}</DataTable.Title>
                    <DataTable.Cell>
                      Ulnar Collateral Ligament Tear
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </View>
            ) : (
              <Button
                mode="contained"
                onPress={() => setHealthInfoLoaded(true)}
                style={{ marginTop: 20 }}
              >
                Connect to your Health Provider
              </Button>
            )}
            <Button mode="contained" style={{ marginTop: 20 }}>
              Update Health Info
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
  },
  textInput: {
    marginBottom: 20,
  },
  bigTitle: {
    color: "#500080",
    fontWeight: "bold",
    fontSize: 32,
  },
  multirowCell: {
    flex: 1,
    flexDirection: "column",
  },
    avatarContainer: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});

export default Profile;
