import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Root from "./src/navigation/root";
import { getStore } from "./src/store";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={getStore().store}>
        <PersistGate loading={null} persistor={getStore().persistor}>
          <Root />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
