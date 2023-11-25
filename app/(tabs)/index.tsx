import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Link } from "expo-router";
import { Stack } from "expo-router";
import ExporeHeader from "@/components/exporeHeader";
import Listings from "@/components/listings";
import listingsData from "@/assets/data/airbnb-listings.json";
import listingsMaps from "@/assets/data/airbnb-listings.geo.json";
import ListingsMap from "@/components/listingsMap";
import ListingsBottomSheet from "@/components/listingsBottomSheet";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);
  const mapItems = useMemo(() => listingsMaps as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => (
            <ExporeHeader onCategoryChanged={onDataChanged}></ExporeHeader>
          ),
        }}
      />
      {/* <Listings listings={items} category={category}></Listings> */}
      <ListingsMap listings={mapItems}></ListingsMap>
      <ListingsBottomSheet
        listings={items}
        category={category}
      ></ListingsBottomSheet>
    </View>
  );
};

export default Page;
