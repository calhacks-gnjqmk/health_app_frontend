import { Camera, CameraType } from "expo-camera";
import * as FS from "expo-file-system";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import axios from "axios";
import { ImageType } from "expo-camera/build/Camera.types";
import CustomSnackBar from "../components/CustomSnackBar";
import SoundContext, { PlayState } from "../components/SoundContext";

const endpoint = "http://172.20.10.2:5000/verify";
const endpoint2 = "http://172.20.10.8:5000/verify2";

const CameraScreen: React.FC = ({ navigation }: any) => {
  const [camera, setCamera] = useState<Camera | null>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(CameraType.back);

  const [snackIsVisible, setSnackIsVisible] = useState<boolean>(false);
  const [snackMessage, setSnackMessage] = useState<string>("");

  const [_, setPlayState] = React.useContext(SoundContext);
    const [firstTime, setFirstTime] = React.useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // Taking the picture
  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync({
      imageType: ImageType.png,
    });
    const imgData = await FS.readAsStringAsync(photo.uri, {
      encoding: FS.EncodingType.Base64,
    });
    console.log("imgData");
    console.log(photo.width);
    console.log(photo.height);
    console.log(imgData.length);

    // const fileName = photo.uri.split("/").pop();
    // const fileType = fileName.split(".").pop();
    // const formData = new FormData();
    // formData.append("file", {
    //   uri: photo.uri,
    //   name: fileName,
    //   type: `image/${fileType}`,
    // });
    //
    // console.log(formData);

    // try {
    //   const response = await fetch(endpoint, {
    //     method: "POST",
    //     body: formData,
    //     headers: {
    //       "content-type": "multiparts/form-data",
    //     },
    //   });
    //   // const response = await axios.post(endpoint, formData, {
    //   //   headers: {
    //   //     "content-type": "multipart/form-data",
    //   //   },
    //   // });
    //   console.log(response);
    // } catch (err) {
    //   console.error(err);
    // }

    // 172.20.10.15/verify
    // try {
    //   const response = await axios.post(endpoint2, {
    //     imgData,
    //   });
    //
    //   if (response.data.result) {
    //             console.log("good")
    //     return;
    //   }
    // } catch (err) {
    //   console.log("error");
    //   console.log(err);
    // }

    // console.log("No person found.");
    // console.log("test")
    if (firstTime) {
            setSnackMessage("Try again!");
            setSnackIsVisible(true);
            setFirstTime(false);
        } else {
            navigation.navigate({ name: "Success"});
        }
  };

  return (
    <View style={styles.container}>
      <View style={{ opacity: 0.5, padding: 10 }}>
        <Text
          style={{
            color: "#200040",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Take a picture to verify your identity.
        </Text>
      </View>
      <Camera
        style={styles.camera}
        ref={(ref) => setCamera(ref)}
        type={type}
        ratio="16:9"
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture} style={styles.snapButton} />
        </View>
      </Camera>
      <CustomSnackBar
        visible={snackIsVisible}
        onDismiss={() => {
          setSnackIsVisible(false);
        }}
        type="error"
        message={snackMessage}
      ></CustomSnackBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  flipButton: {
    flex: 0.25,
    height: 30,
    width: 40,
    textAlign: "center",
    justifyContent: "center",
    marginLeft: "5%",
    marginBottom: "5%",
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 50,
  },
  snapButton: {
    display: "flex",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "20%",
    marginBottom: "5%",
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

export default CameraScreen;
