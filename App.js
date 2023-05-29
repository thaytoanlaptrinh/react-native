import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  function handleInput(enterText) {
    setJob(enterText);
  }
  function handleAddButton() {
    setJobs((preState) => [
      ...preState,
      { text: job, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập dữ liệu"
          onChangeText={handleInput}
        />
        <Button title="Add Job" onPress={handleAddButton} />
      </View>
      <View style={styles.jobContainer}>
        <FlatList
          data={jobs}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}/>;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 26,
    paddingBottom: 24,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    width: "70%",
    marginRight: 8,
  },
  jobContainer: {
    flex: 4,
  },
});
