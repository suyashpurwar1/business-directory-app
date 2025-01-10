import { useUser } from "@clerk/clerk-expo";
import { View, Text, Image, TextInput } from "react-native";
import { Colors } from "./../../constants/Colors.ts";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function Header() {
  const { user } = useUser();
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.primary,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
        <View>
          <Text>Welcome ,</Text>
          <Text
            style={{ fontSize: 19, color: "#fff", fontFamily: "outfit-medium" }}
          >
            {user?.fullName}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 12,
          marginVertical: 10,
          marginTop: 15,
        }}
      >
        <FontAwesome name="search" size={24} color={Colors.primary} />
        <TextInput
          placeholder="Search..."
          style={{ fontFamily: "outfit", fontSize: 16 }}
        />
      </View>
    </View>
  );
}
