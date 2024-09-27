import { SafeAreaView, View } from "react-native";
import WebView from "react-native-webview";

export default function LeaderboardsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#eae7e0" }}>
      <SafeAreaView />
      <WebView source={{ uri: "https://www.lilsnack.co/leaderboards" }} />
    </View>
  );
}
