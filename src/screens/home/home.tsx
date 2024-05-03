import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const Home = () => {
  const navigation = useNavigation()

  const navigateToNotifications = () => {
    navigation.navigate('Notifications')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={navigateToNotifications}>Hello world</Text>
    </SafeAreaView>
  );
};

export default Home;
