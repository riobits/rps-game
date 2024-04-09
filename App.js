import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Choice from "./components/Choice";
import PrimaryButton from "./components/PrimaryButton";

const choices = ["🪨", "📃", "✂️"];

const getRandomChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const getWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (playerChoice === "🪨" && computerChoice === "✂️") ||
    (playerChoice === "📃" && computerChoice === "🪨") ||
    (playerChoice === "✂️" && computerChoice === "📃")
  ) {
    return "You win!";
  }

  return "You lose!";
};

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);

  const handleChoose = () => {
    if (!playerChoice) {
      Alert.alert("No weapon?", "Please choose your weapon");
      return;
    }

    const computerChoice = getRandomChoice();
    const winner = getWinner(playerChoice, computerChoice);

    Alert.alert(
      "Result",
      `Player: ${playerChoice}\nComputer: ${computerChoice}\n${winner}`
    );
  };

  const handleReset = () => {
    setPlayerChoice(null);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Rock paper scissors</Text>
      <Text style={styles.subTitle}>Please choose your weapon</Text>
      <View style={styles.choices}>
        <Choice
          value="🪨"
          playerChoice={playerChoice}
          onPress={setPlayerChoice}
        />
        <Choice
          value="📃"
          playerChoice={playerChoice}
          onPress={setPlayerChoice}
        />
        <Choice
          value="✂️"
          playerChoice={playerChoice}
          onPress={setPlayerChoice}
        />
      </View>
      <View style={styles.buttons}>
        <PrimaryButton onPress={handleChoose}>Choose</PrimaryButton>
        <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 100,
  },
  subTitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  choices: {
    flexDirection: "row",
  },
  buttons: {
    flexDirection: "row",
  },
});
