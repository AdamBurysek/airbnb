import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Link } from "expo-router";
import { Stack } from "expo-router";
import ExporeHeader from "@/components/exporeHeader";
import Listings from "@/components/listings";
import listingsData from "@/assets/data/airbnb-listings.json";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 130 }}>
      <Stack.Screen
        options={{
          header: () => (
            <ExporeHeader onCategoryChanged={onDataChanged}></ExporeHeader>
          ),
        }}
      />
      <Listings listings={items} category={category}></Listings>
    </View>
  );
};

export default Page;
