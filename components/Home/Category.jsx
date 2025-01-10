import { View, Text } from "react-native";
import { Colors } from "./../../constants/Colors.ts";
import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem.jsx";
export default function Category() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    GetCategoryList();
  }, []);
  const GetCategoryList = async () => {
    setCategoryList([])
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      //console.log(doc.data());
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View>
      <View
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Category
        </Text>
        <Text style={{ color: Colors.primary, fontFamily: "outfit-medium" }}>
          View All
        </Text>
      </View>
      <FlatList>
        data{categoryList}
        renderItem={({item,index})=>(
        <CategoryItem category={item} key={index}/>
        )}
      </FlatList>
    </View>
  );
}
