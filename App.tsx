import React from "react";
import { SafeAreaView } from "react-native";

import Root from "./src/navigation/root";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Root />
    </SafeAreaView>
  );
}

export default App;
