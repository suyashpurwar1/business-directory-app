import { View, Text } from "react-native";
import { Colors } from "../../constants/Colors";
export default function CategoryItem({ category }) {
  return (
    <View>
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.ICON_BG,
          borderRadius: 99,
          marginRight: 15,
        }}
      >
        <Image
          source={{ uri: category.item }}
          style={{ width: 40, height: 40 }}
        />
      </View>
    </View>
  );
}
