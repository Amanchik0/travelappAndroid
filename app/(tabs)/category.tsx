import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "@/constants/Colors";

const categories = [
  { title: "All", iconName: "hiking" },
  { title: "Beaches", iconName: "beach" },
  { title: "Mountains", iconName: "terrain" },
  { title: "Cities", iconName: "city" },
  { title: "Forests", iconName: "tree" },
  { title: "Lakes", iconName: "swim" },
  { title: "Historical Sites", iconName: "castle" },
  { title: "National Parks", iconName: "pine-tree" },
  { title: "Islands", iconName: "island" },
  { title: "Deserts", iconName: "weather-sunny" }
];

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Категории</Text>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selectedCategory === index && styles.categoryButtonSelected
            ]}
            onPress={() => setSelectedCategory(index)}
          >
            <MaterialCommunityIcons
              name={category.iconName}
              size={24}
              color={selectedCategory === index ? Colors.white : Colors.black}
            />
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === index && styles.categoryButtonTextSelected
              ]}
            >
              {category.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.white
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.black
  },
  categoriesContainer: {
    flexDirection: 'row'
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: Colors.lightGray
  },
  categoryButtonSelected: {
    backgroundColor: Colors.primaryColor
  },
  categoryButtonText: {
    marginLeft: 5,
    color: Colors.black
  },
  categoryButtonTextSelected: {
    color: Colors.white
  }
});

export default CategoryPage;
