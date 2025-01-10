import { View, Text, FlatList, Image } from "react-native";
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "./../../config/FirebaseConfig";
import { useEffect, useState } from "react";

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);
  useEffect(() => {
    GetSliderList();
  }, []);

  const GetSliderList = async () => {
    try {
      setSliderList([]);
      const q = query(collection(db, "Slider"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        //console.log(doc.data());
        setSliderList((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      console.error("Error fetching slider data: ", error);
    }
  };

  return (
    <View>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20, padding: 20 }}>
        #Special for you
      </Text>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ padding: 20 }}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              width: 300,
              height: 160,
              borderRadius: 15,
              marginLeft: 10,
            }}
          />
        )}
      />
    </View>
  );
}
