import { View, Text, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.viewJob}>
      <Text style={styles.textJob}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  viewJob: {
    borderRadius: 6,
    backgroundColor: "violet",
    margin: 8,
    padding: 8,
  },
  textJob: {
    color: "#fff",
  },
});
