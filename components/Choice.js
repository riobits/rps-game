import { Pressable, StyleSheet, Text, View } from "react-native";

function Choice({ value, playerChoice, onPress }) {
  const handlePress = () => {
    onPress(value);
  };

  return (
    <View
      style={[styles.outerContainer, value === playerChoice && styles.active]}
    >
      <Pressable
        style={styles.innerContainer}
        android_ripple={{ color: "#ccc" }}
        onPress={handlePress}
      >
        <Text style={styles.choiceText}>{value}</Text>
      </Pressable>
    </View>
  );
}

export default Choice;

const styles = StyleSheet.create({
  outerContainer: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 10,
    margin: 10,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  choiceText: {
    fontSize: 30,
  },
  active: {
    borderColor: "purple",
  },
});
