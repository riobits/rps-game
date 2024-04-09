import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ onPress, children }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.innerContainer}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "purple",
    borderRadius: 50,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
  },
});
