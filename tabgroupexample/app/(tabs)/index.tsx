import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";

export default function GamesScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#eae7e0" }}>
      <SafeAreaView />
      <WebView source={{ uri: "https://www.lilsnack.co/" }} />
    </View>
  );
}
