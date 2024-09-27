import { View, SafeAreaView } from "react-native";
import WebView from "react-native-webview";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#eae7e0" }}>
      <SafeAreaView />
      <WebView source={{ uri: "https://www.lilsnack.co/" }} />
      <View style={{ marginBottom: 10, backgroundColor: "white" }} />
    </View>
  );
}
